import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogDetail from '@/components/blog/blogdetail/blogdetails'
import { blogPosts } from '@/data/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Generate static params for all blog posts for ISR
  return blogPosts.map(post => ({
    slug: post.slug
  }))
}

export const dynamicParams = true

// ISR: Revalidate every 90 days (7776000 seconds)
export const revalidate = 7776000

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | Ank Square',
    }
  }

  return {
    title: `${post.title} | Ank Square Blog`,
    description: post.excerpt,
    keywords: `${post.category}, digital marketing, e-commerce, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://usa.anksquare.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: [post.category],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://usa.anksquare.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ank Square",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usa.anksquare.com/logo.png"
      }
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://usa.anksquare.com/blog/${post.slug}`
    }
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only">Skip to main content</a>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main id="main-content" role="main">
        {/* Blog Detail Section */}
        <BlogDetail />
      </main>
    </>
  )
}