import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'

interface ContentNode {
  type?: string
  value?: string
  tag?: string
  props?: Record<string, string>
  children?: ContentNode | ContentNode[]
}

interface BlogPost {
  title?: string
  _path?: string
  description?: string
  body: string | ContentNode
  date: string
}

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: 'Bharat Kashyap',
    description: 'Personal website of Bharat Kashyap',
    id: 'https://bharatk.in',
    link: 'https://bharatk.in',
    language: 'en',
    image: 'https://bharatk.in/me.jpg',
    favicon: 'https://bharatk.in/favicon.ico',
    copyright: 'All rights reserved 2024, Bharat Kashyap',
    updated: new Date(),
    generator: 'Nuxt using Feed for Node.js',
    feedLinks: {
      rss2: 'https://bharatk.in/rss.xml',
    },
  })

  const posts = await serverQueryContent<BlogPost>(event, 'blog')
    .sort({ date: -1 })
    .find()

  for (const post of posts) {
    console.log('postinder', post.body)
    let content = ''
    if (typeof post.body === 'string') {
      content = post.body
    } else {
      content = renderContent(post.body)
    }

    feed.addItem({
      title: post.title ?? '',
      id: `https://bharatk.in${post._path}`,
      link: `https://bharatk.in${post._path}`,
      description: post.description ?? '',
      content: content,
      date: new Date(post.date),
    })
  }

  event.node.res.setHeader('Content-Type', 'text/xml')
  return feed.rss2()
})

function renderContent(node: ContentNode | ContentNode[]): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(renderContent).join('')
  if (node.type === 'root') return renderContent(node.children ?? [])
  if (node.type === 'text') return node.value ?? ''
  if (node.tag) {
    // Skip the comments node
    if (node.tag === 'comments') return ''
    const attrs = node.props
      ? ' ' +
        Object.entries(node.props)
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ')
      : ''
    const children = node.children ? renderContent(node.children) : ''
    return `<${node.tag}${attrs}>${children}</${node.tag}>`
  }
  return ''
}
