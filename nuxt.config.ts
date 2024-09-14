export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'Bharat Kashyap',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'The internet home of Bharat Kashyap',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Public+Sans|Crimson+Text&display=swap',
        },
      ],
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  content: {
    markdown: {
      tags: {
        h2: 'ProseH2',
        p: 'Text',
        img: 'Image',
        a: 'ProseA',
        ol: 'ProseOl',
        ul: 'ProseUl',
        pre: 'ProseCodeBlock',
        blockquote: 'ProseBlockquote',
        comments: 'Comments',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  devServerHandlers: [],

  // RSS feed
  nitro: {
    prerender: {
      routes: ['/rss.xml'],
    },
  },
  routeRules: {
    '/rss.xml': {
      prerender: true,
    },
  },

  compatibilityDate: '2024-09-10',
})
