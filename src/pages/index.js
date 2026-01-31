import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import { NextSeo } from 'next-seo'

export default function Home({ posts }) {
  return (
    <Layout>
      <NextSeo
        title="Home - My Next.js Blog"
        description="A high-performance blog platform built with Next.js, featuring Static Site Generation and MDX support."
        openGraph={{
          title: 'Home - My Next.js Blog',
          description: 'A high-performance blog platform built with Next.js',
          type: 'website',
          url: 'http://localhost:3000',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <div className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Thoughts, stories, and ideas on web development and technology</p>
      </div>

      <div className="post-list" data-testid="post-list">
        {posts.slice(0, 6).map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}