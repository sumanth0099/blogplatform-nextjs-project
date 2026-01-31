import { getSortedPostsData } from '../../lib/posts'
import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'
import Pagination from '../../components/Pagination'
import { NextSeo } from 'next-seo'

const POSTS_PER_PAGE = 10

export default function BlogPage({ posts, currentPage, totalPages }) {
  return (
    <Layout>
      <NextSeo
        title={`Blog - Page ${currentPage} - My Next.js Blog`}
        description="Browse all blog posts on web development, Next.js, React, and more."
        openGraph={{
          title: `Blog - Page ${currentPage}`,
          description: 'Browse all blog posts',
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <div className="hero">
        <h1>All Blog Posts</h1>
        <p>Explore our complete collection of articles</p>
      </div>

      <div className="post-list" data-testid="post-list">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog"
        />
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  const allPosts = getSortedPostsData()
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: String(i + 1) },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page)
  const allPosts = getSortedPostsData()
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)

  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    props: {
      posts,
      currentPage: page,
      totalPages,
    },
  }
}