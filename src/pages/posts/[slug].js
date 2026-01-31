import { getAllPostSlugs, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import MDXComponents from '../../components/MDXComponents'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

export default function Post({ post, mdxSource }) {
  return (
    <Layout>
      <NextSeo
        title={`${post.title} - My Next.js Blog`}
        description={post.excerpt}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
          },
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <article className="blog-post" data-testid="blog-post">
        <header className="blog-post-header">
          <h1 className="post-title" data-testid="post-title">
            {post.title}
          </h1>
          <div className="post-meta">
            <span>By {post.author}</span>
            <span>{post.date}</span>
            <span className="reading-time" data-testid="reading-time">
              {post.readingTime}
            </span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="post-card-tags">
              {post.tags.map(tag => (
                <span key={tag} className="post-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="post-content" data-testid="post-content">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug)
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  })

  return {
    props: {
      post,
      mdxSource,
    },
  }
}