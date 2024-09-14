<template>
  <div
    class="max-w-7xl mx-auto mt-4 md:my-6 px-4 sm:px-6 lg:px-8 py-12 opacity-0 animation-forwards animate-fade-in animation-delay-100"
  >
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <List
          :items="play.filter((item, index) => index % 2 === 0)"
          title="Play"
        />
      </div>
      <div class="md:w-1/2">
        <List
          :items="play.filter((item, index) => index % 2 !== 0)"
          title="&nbsp;"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
const { $content, $locale } = useNuxtApp()

const content = $content
const locale = $locale

const { play } = content
</script>
