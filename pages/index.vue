<template>
  <div
    id="details"
    class="flex flex-col self-start mx-10 dark:text-gray-300 mb-8 mt-10 md:mt-16 md:mb-24 text-sm md:text-base"
  >
    <div
      v-if="content.title"
      class="flex flex-col opacity-0 animation-forwards animate-fade-in animation-delay-50"
    >
      <span
        class="text-xl text-gray-600 dark:text-neutral-200 my-5 crimson-text"
        >{{ content.title[locale] }}</span
      >
      <figure class="my-4">
        <NuxtImg
          src="/osaka.jpg"
          alt="Me in Osaka with my first and most sincere love: Chocolate"
          class="rounded-lg shadow-md max-w-xs mx-auto"
          width="320"
          loading="eager"
        />
        <figcaption class="text-gray-500 text-sm mt-2 text-center">
          <span>📍</span
          ><span class="italic"
            >in Osaka, with my first and most sincere love, chocolate</span
          >
        </figcaption>
      </figure>
      <span
        class="text-xl text-gray-600 dark:text-zinc-300 my-5 border-l-4 border-gray-300 dark:border-gray-600 pl-4 crimson-text"
      >
        {{ content.about.tldr[locale] }}
      </span>
      <!-- eslint-disable vue/no-v-html -->
      <span
        v-for="(para, index) in content.about.more"
        :key="index"
        class="text-md md:text-md text-gray-500 dark:text-zinc-300 my-2.5"
        v-html="`${para[locale]}`"
      >
      </span>
      <!-- eslint-enable -->
    </div>
    <footer
      class="opacity-0 text-md md:text-lg animate-fade-in animation-forwards my-2 md:my-4 crimson-text"
    >
      <div
        class="text-stone-500 dark:text-neutral-400 italic border-l-4 pl-4 border-zinc-400"
      >
        {{ randomQuote.text }}
      </div>
      <div class="text-zinc-400 dark:text-neutral-500 italic pt-2">
        {{ randomQuote.source }}
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { useState } from '#imports'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/osaka.jpg',
    },
  ],
})

const { $content, $locale, $quotes } = useNuxtApp()

const content = $content
const locale = $locale

const quotes = ref($quotes)

const randomQuote = useState('randomQuote', () => {
  const index = Math.floor(Math.random() * $quotes.length)
  return $quotes[index]
})
</script>
