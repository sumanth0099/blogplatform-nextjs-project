```markdown
# Next.js Blog Platform

A static, SEO-friendly blog platform built using Next.js with MDX support and modern web development best practices.

---

## Overview

This project is a high-performance blog platform developed using **Next.js (Pages Router)**.  
It leverages **Static Site Generation (SSG)** to pre-render pages at build time, resulting in fast load times, improved SEO, and better scalability.

Blog content is written using **MDX**, which allows Markdown files to include React components.

---

## Key Features

- Static Site Generation (SSG)
- MDX-based blog content
- SEO optimization (meta tags, Open Graph, Twitter Cards)
- Automatic sitemap and RSS feed generation
- Dark / Light theme toggle with persistence
- Fully responsive design
- Paginated blog listing (10 posts per page)
- Reading time calculation
- Next.js Image optimization
- Code syntax highlighting with Prism.js
- Docker and Docker Compose support

---

## Project Structure

```bash

blog-platform/
├── posts/                      # MDX blog posts
├── public/
│   ├── images/
│   ├── sitemap.xml
│   └── rss.xml
├── scripts/
│   ├── generate-sitemap.js
│   └── generate-rss.js
├── src/
│   ├── components/             # Reusable React components
│   ├── lib/                    # Post utilities
│   ├── pages/                  # Next.js pages
│   └── styles/                 # Global and Prism styles
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── package.json
└── README.md

````

---

## Technology Stack

- Framework: Next.js 14 (Pages Router)
- Language: JavaScript (ES6+)
- Styling: Plain CSS with CSS Variables
- Content: MDX
- SEO: next-seo
- Code Highlighting: Prism.js
- Containerization: Docker & Docker Compose
- Runtime: Node.js 18

---

## Prerequisites

- Node.js 18 or higher
- npm
- Docker and Docker Compose

---

## Getting Started

### Local Development (Without Docker)

```bash
git clone https://github.com/sumanth0099/blogplatform-nextjs-project.git
cd blogplatform-nextjs-project
npm install
npm run dev
````

Open: [http://localhost:3000]

---

### Production Build (Without Docker)

```bash
npm run build
npm start
```

This generates static pages, sitemap, and RSS feed.

---

### Docker Deployment

```bash
docker-compose up --build -d
```

Useful commands:

```bash
docker-compose ps
docker-compose logs -f web
docker-compose down
```

---

## Available Routes

* `/` – Homepage
* `/blog/1` – Blog listing page
* `/blog/2` – Additional pages (pagination)
* `/posts/[slug]` – Individual blog post
* `/sitemap.xml` – Sitemap
* `/rss.xml` – RSS feed
* `/*` – Custom 404 page

---

## Creating Blog Posts

All blog posts are stored in the `/posts` directory as `.mdx` files.

### Example MDX File

```mdx
---
title: "Post Title"
date: "2024-01-15"
author: "Author Name"
tags: ["Next.js", "SEO"]
excerpt: "Short summary for previews and SEO."
---

## Post Content

Write your content using Markdown syntax.
```

---

### Code Example in Posts

```javascript
function greet() {
  console.log("Hello, World!");
}
```

---

### Adding Images

Place images in `/public/images/` and reference them in MDX:

```mdx
![Alt text](/images/example.jpg)
```

Images are automatically optimized by Next.js.

---

## Theme Customization

Edit `/src/styles/globals.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

.dark {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}
```

---

## SEO Features

* Dynamic meta tags
* Open Graph and Twitter Cards
* Canonical URLs
* Auto-generated sitemap
* Auto-generated RSS feed

---

## Testing Support

The application includes `data-testid` attributes such as:

* `post-list`
* `post-card-{slug}`
* `pagination-next`
* `theme-toggle`
* `not-found-message`

---

## Environment Variables

Defined in `.env.example`:

```env
PORT=3000
NODE_ENV=production
BASE_URL=http://localhost:3000
SITE_NAME=My Next.js Blog
SITE_DESCRIPTION=A modern static blog platform
```

---

## Performance

* Static pages generated at build time
* Optimized images and code splitting
* Lightweight CSS without frameworks

---

## Author

Tetala Sumanth Reddy