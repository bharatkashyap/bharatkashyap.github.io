<template>
  <div
    class="max-w-3xl mx-auto mt-4 md:my-6 px-4 sm:px-6 lg:px-8 py-12 opacity-0 animation-forwards animate-fade-in animation-delay-100"
  >
    <div class="flex justify-between items-center mb-8">
      <h1
        class="text-3xl text-red-600 dark:text-red-400 font-bold crimson-text"
      >
        Writing
      </h1>
      <a
        href="/rss.xml"
        target="_blank"
        class="text-blue-400 dark:text-blue-300 hover:underline public-sans"
        title="RSS Feed"
      >
        RSS
      </a>
    </div>
    <ul class="space-y-6">
      <li
        v-for="post in posts"
        :key="post._path"
        class="flex justify-between items-baseline hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300 dark:hover:bg-zinc-800"
      >
        <NuxtLink :to="post._path" class="flex-grow">
          <div>
            <h2
              class="text-xl font-semibold text-sky-600 crimson-text dark:text-blue-400"
            >
              {{ post.title }}
            </h2>
            <p class="text-gray-400">{{ post.description }}</p>
          </div>
        </NuxtLink>
        <span class="text-gray-500 text-right">{{
          new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').sort({ date: -1 }).find()
)
</script>
