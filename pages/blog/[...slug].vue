<template>
  <article class="max-w-3xl mx-auto mt-4 md:my-6 px-4 sm:px-6 lg:px-8 py-12">
    <h1
      class="text-4xl font-bold mb-4 text-gray-600 crimson-text dark:text-amber-300"
    >
      {{ post.title }}
    </h1>
    <h2 class="text-xl mb-4 text-gray-500 public-sans dark:text-zinc-400">
      {{ post.description }}
    </h2>
    <p class="text-gray-400 mb-8 dark:text-zinc-500">
      {{
        new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      }}
    </p>
    <ContentRenderer :value="post" />

    <!-- Render comments if they exist -->
    <Comments
      v-if="post.comments && post.comments.length > 0"
      :comments="post.comments"
    />
  </article>
</template>

<script setup>
const { path } = useRoute()

// Nuxt Content v3: Query by path using queryCollection
const { data: post } = await useAsyncData(`content-${path}`, async () => {
  const results = await queryCollection('blog').path(path).first()

  return results
})

// Function to find the first image in the post content
const getFirstImage = (content) => {
  if (!content) return null
  const imgRegex = /<img.*?src="(.*?)".*?>/
  const match = content.match(imgRegex)
  return match ? match[1] : null
}

// Get the first image from the post content
const firstImage = computed(() => {
  if (!post.value?.body) return null
  return getFirstImage(
    post.value.body?.children
      ?.find((child) => child.type === 'element')
      ?.children?.join(''),
  )
})

// Construct the full URL for the image
const imageUrl = computed(() =>
  firstImage.value ? `https://bharatk.in${firstImage.value}` : null,
)

// Set head metadata
useHead(() => ({
  title: post.value?.title || 'Blog Post',
  meta: [
    { name: 'description', content: post.value?.description || '' },
    { name: 'author', content: 'Bharat Kashyap' },
    { name: 'keywords', content: post.value?.keywords?.join(', ') || '' },
    // Open Graph
    { property: 'og:title', content: post.value?.title || '' },
    { property: 'og:description', content: post.value?.description || '' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://bharatk.in${path}` },
    ...(imageUrl.value
      ? [{ property: 'og:image', content: imageUrl.value }]
      : []),
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value?.title || '' },
    { name: 'twitter:description', content: post.value?.description || '' },
    ...(imageUrl.value
      ? [{ property: 'twitter:image', content: imageUrl.value }]
      : []),
  ],
}))

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Post not found' })
}
</script>
