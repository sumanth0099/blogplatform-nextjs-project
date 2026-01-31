export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} My Next.js Blog. All rights reserved.</p>
          <p>
            <a href="/sitemap.xml">Sitemap</a> | <a href="/rss.xml">RSS Feed</a>
          </p>
        </div>
      </footer>
    )
  }