<template>
  <div
    class="max-w-7xl mx-auto mt-4 md:my-6 px-4 sm:px-6 lg:px-8 py-12 opacity-0 animation-forwards animate-fade-in animation-delay-100"
  >
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-2/3">
        <List :items="work.employment" title="Employment" />
      </div>

      <div class="md:w-1/3">
        <List :items="work.speaking" title="Speaking" />

        <h2
          class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-zinc-300 crimson-text"
        >
          Contact
        </h2>
        <p class="text-gray-700 dark:text-zinc-300 public-sans">
          bharatkashyap[dot]exun[at]gmail[dot]com
        </p>
        <p class="mt-4 public-sans dark:text-zinc-300">
          {{ work.contact[locale] }}
          <a
            href="/Resume.pdf"
            target="_blank"
            class="text-blue-600 dark:text-blue-400 hover:underline"
            >resumé</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'

const { $content, $locale } = useNuxtApp()

const content = $content
const locale = $locale

const { work } = content
</script>
