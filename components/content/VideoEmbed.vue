<template>
  <div class="video-embed my-4 pl-8">
    <iframe
      :src="embedUrl"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full aspect-video rounded-lg shadow-lg"
    ></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'YouTube video player',
  },
})

const embedUrl = computed(
  () => `https://www.youtube.com/embed/${props.videoId}?feature=oembed`
)
</script>
