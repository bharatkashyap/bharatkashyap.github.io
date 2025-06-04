---
title: 'Fine-Grained Reactivity in React'
date: '2025-06-05'
description: 'How to minimize re-renders in large React trees using a custom Store and selector-based subscriptions.'
tags: ['react', 'performance', 'state-management', 'selectors', 'optimization']
---

When building large, interactive UIs—think lists, grids, or charts—performance can quickly become a concern. One of the most effective ways to optimize React apps is to minimize unnecessary re-renders, especially in trees with many children. This post explores a pattern for fine-grained reactivity using a custom Store and selector-based subscriptions, allowing only the components that need to update to re-render.

_This post is due in large part to an internal research memo written by a colleague. What I'm writing here is my attempt to store it for posterity._

## The Problem: Context and Re-renders

Consider a simple list of selectable items:

```tsx
const Context = React.createContext()

function List() {
  const [selected, setSelected] = React.useState(0)
  const context = React.useMemo(() => ({ selected, setSelected }), [selected])
  return (
    <Context.Provider value={context}>
      {Array.from({ length: 1000 }).map((_, i) => (
        <Item key={i} index={i} />
      ))}
    </Context.Provider>
  )
}

const Item = React.memo(({ index }) => {
  const context = React.useContext(Context)
  const isSelected = context.selected === index
  return (
    <button onClick={() => context.setSelected(index)}>
      {index} {isSelected && '-- selected --'}
    </button>
  )
})
```

Even though `Item` is wrapped in `React.memo`, every single `Item` re-renders when the selection changes, because the context value changes on every update.

## The Solution: Store and Selectors

To avoid this, we can use a custom `Store` object that never changes identity, and let components subscribe to only the state slices they care about.

### Store Implementation

```tsx
class Store<State> {
  state: State
  private listeners = new Set<(state: State) => void>()

  constructor(initial: State) {
    this.state = initial
  }

  subscribe = (fn: (state: State) => void) => {
    this.listeners.add(fn)
    return () => this.listeners.delete(fn)
  }

  update = (newState: State) => {
    this.state = newState
    this.listeners.forEach((l) => l(newState))
  }
}
```

### useSelector Hook

```tsx
function useSelector<State, Selected>(
  store: Store<State>,
  selector: (state: State, ...args: any[]) => Selected,
  ...args: any[]
): Selected {
  const [value, setValue] = React.useState(() => selector(store.state, ...args))
  React.useEffect(() => {
    return store.subscribe((state) => setValue(selector(state, ...args)))
  }, [store, selector, ...args])
  return value
}
```

## Example: Only the Selected Items Re-render

```tsx
const Context = React.createContext<Store<{ selected: number }> | null>(null)

function List() {
  // Store instance is stable and never changes
  const storeRef = React.useRef(new Store({ selected: 0 }))
  return (
    <Context.Provider value={storeRef.current}>
      {Array.from({ length: 1000 }).map((_, i) => (
        <Item key={i} index={i} />
      ))}
    </Context.Provider>
  )
}

const isSelectedSelector = (state: { selected: number }, index: number) =>
  state.selected === index

const Item = React.memo(({ index }: { index: number }) => {
  const store = React.useContext(Context)!
  const isSelected = useSelector(store, isSelectedSelector, index)

  return (
    <button onClick={() => store.update({ selected: index })}>
      {index} {isSelected && '-- selected --'}
    </button>
  )
})
```

## Reactive vs Non-Reactive Bindings

- **Non-reactive:**  
  `const isFirstItemSelected = isSelectedSelector(store.state, 0);`
- **Reactive:**  
  `const isFirstItemSelected = useSelector(store, isSelectedSelector, 0);`

**Do not mix** reactive and non-reactive values in the same render, as it can lead to inconsistent state.

## Tradeoffs and Alternatives

Selector-based reactivity is simple and effective for most use-cases. For extremely high-frequency updates (e.g., scrolling thousands of cells), event-based reactivity can be even more efficient, but is more complex to implement.
