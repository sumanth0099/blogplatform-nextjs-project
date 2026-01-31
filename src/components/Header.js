import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="header-title">
            My Next.js Blog
          </Link>
          <nav className="header-nav">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}