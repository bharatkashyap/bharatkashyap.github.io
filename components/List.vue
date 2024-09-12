<template>
  <h2
    class="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-red-600 dark:border-gray-700 dark:text-red-400 crimson-text"
  >
    {{ title }}
  </h2>

  <div v-for="(item, index) in items" :key="index" class="mb-8 public-sans">
    <h3 class="text-xl font-semibold crimson-text dark:text-zinc-200">
      {{ item.title }}
    </h3>
    <p class="text-sm text-gray-600 dark:text-zinc-300 italic mb-1">
      {{ item.date }}
    </p>
    <p class="text-md font-medium mb-2 dark:text-zinc-200">
      {{ item.designation }}
    </p>
    <p class="text-gray-700 dark:text-zinc-200 mb-2">
      {{ item.description[locale] }}
    </p>
    <div v-if="item.pow && item.pow.length > 0" class="mt-2 dark:text-zinc-300">
      Links:
      <a
        v-for="(link, linkIndex) in item.pow"
        :key="linkIndex"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 dark:text-blue-400 hover:underline mr-4"
      >
        {{ linkIndex + 1 }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
