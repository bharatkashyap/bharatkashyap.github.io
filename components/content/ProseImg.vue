<template>
  <figure class="my-4">
    <img
      v-bind="$attrs"
      class="rounded-lg shadow-md max-w-full h-auto mx-auto"
    />
    <figcaption
      v-if="$attrs.alt"
      class="text-gray-500 text-sm mt-2 italic text-center"
    >
      {{ $attrs.alt }}
    </figcaption>
  </figure>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>
