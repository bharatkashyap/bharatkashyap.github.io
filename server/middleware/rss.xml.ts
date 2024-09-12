import { defineEventHandler, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  if (event.node.req.url === '/rss.xml') {
    return sendRedirect(event, '/api/rss', 308)
  }
})
