<template>
  <figure class="my-4">
    <img
      :src="src"
      :alt="alt"
      class="rounded-lg shadow-md max-w-full h-auto mx-auto"
    />
    <figcaption class="text-gray-500 text-sm mt-2 italic text-center">
      {{ alt }}
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
})
</script>
