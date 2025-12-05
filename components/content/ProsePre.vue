<template>
  <pre
    v-bind="$attrs"
    class="ml-8 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono"
  >
    <slot />
  </pre>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>
