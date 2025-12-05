---
title: 'Fastest empty object check in JavaScript'
date: '2025-01-20'
description: 'A benchmark I thought could help others'
tags: ['javascript', 'performance', 'optimization']
---

Recently, at work, I was required to check for an object being empty or not with potentially important consequences for performance given the object being checked for could be arbitarily large.

Going by [Romain's excellent internal guide](https://www.notion.so/mui-org/Performance-guide-memory-allocations-134cbfe7b66080cba325db614278fc20) ( [here's a more general, public version](https://romgrk.com/posts/optimizing-javascript/) ), I was hesitant about using `Object.keys(obj).length === 0`, so decided to test the options out for myself.

Option 1:

```js
const isObjEmpty1 = (obj) => {
  for (const k in obj) {
    if (Object.hasOwn(obj, k)) return false
  }
  return true
}
```

Option 2:

```js
const isObjEmpty2 = (obj) => Object.keys(obj).length === 0
```

Option 3:

```js
const isObjEmpty3 = (obj) => Object.getOwnPropertyNames(obj).length === 0
```

::ObjectEmpty
::

## Result

I found that `Object.keys(obj).length === 0` seems to reliably be fast, with a `for ... in`-based, iterative method only negligibly slower. Feel free to use this to check for empty objects, fast.
