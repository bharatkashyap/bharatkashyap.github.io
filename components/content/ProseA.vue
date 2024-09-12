<template>
  <a
    :href="href"
    class="text-blue-500 hover:text-blue-400 underline transition-colors duration-300 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
    target="_blank"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: String,
})
</script>
