import {
  content,
  locale,
  initLocale,
  routes,
  quotes,
  detectBrowserLocale,
} from '~/utils/contentStore'

export default defineNuxtPlugin((nuxtApp) => {
  const initialLocale = process.server
    ? nuxtApp.ssrContext?.event.node.req.headers['accept-language']?.startsWith(
        'hi'
      )
      ? 'hi'
      : 'en'
    : detectBrowserLocale()

  initLocale(initialLocale)

  nuxtApp.provide('content', content)
  nuxtApp.provide('quotes', quotes)
  nuxtApp.provide('locale', locale)
  nuxtApp.provide('routes', routes)
})
