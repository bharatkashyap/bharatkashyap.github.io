---
title: 'Fine-grained selectors save renders in Zustand'
date: '2025-12-05'
description: 'Why useMemo will not save you'
tags: ['react', 'zustand', 'performance', 'state management']
---

While building a new Zustand store for a new project at work, I came across an interesting example to demonstrate the idea that the way you select state impacts performance. Inspired by Romaine's post on [reactivity](https://romgrk.com/posts/reactivity-is-easy/), I created a demo to show the difference between broad and narrow selectors.

## The Problem

Consider a simple saved items feature with heart buttons. A simple approach to detect `isSaved` state would be to select the entire `savedItems` array and and then use `useMemo` to memoize the find operation.

```jsx
// Button component
function HeartButton({ productId }) {
  // Broad selector - selects the entire savedItems array
  const savedItems = useZustandStore((state) => state.savedItems)
  const isSaved = useMemo(
    () => savedItems.some((item) => item.productId === productId),
    [savedItems, productId],
  )
}
```

Another approach would be to narrow down the selector by running the find operation inside the selector function.

```jsx
// Button component
function HeartButton({ productId }) {
  // Narrow selector - selects only the boolean state
  //  for the current product
  const isSaved = useZustandStore((state) =>
    state.savedItems.some((item) => item.productId === productId),
  )
}
```

## Example

Here's the two React components above built and rendered within an app, like so:

```jsx
// App component
function App() {
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="container">
      {productIds.map((id) => (
        <HeartButton key={id} productId={id} />
      ))}
    </div>
  )
}
```

Watch the **yellow flashes** - they show re-renders.

### Broad Selector

::DemoFrame{url="/demos/zustand-broad.html" title="Broad Selector" description="Uses broad selector with useMemo. Watch ALL buttons flash when you click any one."}
::

### Narrow Selector

::DemoFrame{url="/demos/zustand-narrow.html" title="Narrow Selector" description="Uses narrow selector. Only the affected component re-renders."}
::

## The Numbers

From React Profiler measurements with 8 buttons:

- **Broad selector**: ~0.3ms per interaction × 8 renders = **2.4ms wasted**
- **Narrow selector**: ~0.3ms per interaction × 1 render = **0.3ms total**

And this scales linearly with the number of buttons on your page!
