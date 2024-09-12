<template>
  <div class="comments mt-8 border-t border-gray-700 py-8">
    <!-- Only render this heading at the top level -->
    <h2
      v-if="level === 0"
      class="text-2xl font-semibold mb-4 text-gray-500 crimson-text"
    >
      Comments
    </h2>
    <ul class="space-y-6" :class="replyListClass">
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="border border-gray-700 rounded-lg p-4"
      >
        <div class="flex items-center mb-2">
          <span class="text-gray-600 dark:text-gray-400">{{
            comment.author
          }}</span>
          <span class="text-gray-400 dark:text-gray-400 text-sm ml-2">{{
            formatDate(comment.date)
          }}</span>
        </div>
        <p class="text-gray-500 dark:text-gray-300">{{ comment.content }}</p>
        <!-- Recursively render replies -->
        <Comments
          v-if="comment.replies"
          :comments="comment.replies"
          :level="level + 1"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
  level: {
    type: Number,
    default: 0,
  },
})

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const replyListClass = computed(() => {
  const baseClasses = 'space-y-4'
  const indentClass = `ml-${Math.min(props.level * 4, 16)}` // Cap at ml-32 for deep nesting
  return `${baseClasses} ${indentClass}`
})
</script>
