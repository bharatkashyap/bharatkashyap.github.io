<template>
  <div class="my-8">
    <h3 class="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
      {{ title }}
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
      {{ description }}
    </p>
    <iframe
      :src="url"
      class="w-full h-32 border border-gray-300 dark:border-gray-700 rounded-lg"
      title="Zustand Broad Selector Demo"
    />
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
