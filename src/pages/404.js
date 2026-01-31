import Link from 'next/link'
import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'

export default function Custom404() {
  return (
    <Layout>
      <NextSeo
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div className="not-found">
        <h1>404</h1>
        <p data-testid="not-found-message">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/" className="home-link">
          Go Back Home
        </Link>
      </div>
    </Layout>
  )
}