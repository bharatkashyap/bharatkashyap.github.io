<template>
  <p
    class="mb-4 text-gray-700 dark:text-zinc-300 leading-relaxed public-sans"
    v-bind="$attrs"
  >
    <slot />
  </p>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>
