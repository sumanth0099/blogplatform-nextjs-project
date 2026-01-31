import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <div className="post-card" data-testid={`post-card-${post.slug}`}>
      <h2 className="post-card-title">{post.title}</h2>
      <div className="post-card-meta">
        {post.date} • {post.author} • {post.readingTime}
      </div>
      <p className="post-card-excerpt">{post.excerpt}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="post-card-tags">
          {post.tags.map(tag => (
            <span key={tag} className="post-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <Link 
        href={`/posts/${post.slug}`} 
        className="read-more-btn"
        data-testid={`read-more-${post.slug}`}
      >
        Read More
      </Link>
    </div>
  )
}