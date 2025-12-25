import { Feed } from 'feed'

interface ContentNode {
  type?: string
  value?: string
  tag?: string
  props?: Record<string, string>
  children?: ContentNode | ContentNode[]
}

interface BlogPost {
  title?: string
  path?: string // Updated from _path for Nuxt Content v3
  description?: string
  body: any // Cast to any to handle MarkdownRoot structure
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

  // Cast queryCollection result to any[] to avoid strict type checking issues
  // until content types are fully regenerated
  const posts = (await queryCollection('writing')
    .order('date', 'DESC')
    .all()) as any[]

  for (const post of posts) {
    let content = ''
    if (typeof post.body === 'string') {
      content = post.body
    } else {
      content = renderContent(post.body)
    }

    feed.addItem({
      title: post.title ?? '',
      id: `https://bharatk.in${post.path}`,
      link: `https://bharatk.in${post.path}`,
      description: post.description ?? '',
      content: content,
      date: new Date(post.date),
    })
  }

  event.node.res.setHeader('Content-Type', 'text/xml')
  return feed.rss2()
})

function renderContent(node: ContentNode | ContentNode[]): string {
  if (!node) return '' // Safety check
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(renderContent).join('')

  // Handle root node having children but not being an array itself
  if (node.type === 'root' && node.children) return renderContent(node.children)

  if (node.type === 'image') {
    // Simple Image handling just in case
    return `<img src="${node.props?.src || ''}" alt="${node.props?.alt || ''}" />`
  }

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
