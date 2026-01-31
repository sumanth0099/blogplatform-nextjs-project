# 📘 Next.js Blog Platform
*A static, SEO-friendly blog system built with Next.js, MDX, and modern web best practices.*
---
## 📌 Overview
This project is a **high-performance blog platform** built using **Next.js (Pages Router)**.
It uses **Static Site Generation (SSG)** to pre-render pages at build time, ensuring fast load speeds, strong SEO, and excellent scalability.
Blog content is written using **MDX**, allowing Markdown with embedded React components.

---

## Key Features
*  **Static Site Generation (SSG)** for fast performance
*  **MDX-based content system** (Markdown + JSX)
*  **SEO-ready** (meta tags, Open Graph, Twitter Cards)
*  **Automatic sitemap & RSS feed generation**
*  **Dark / Light theme toggle** with saved preference
*  **Fully responsive design**
*  **Paginated blog listing** (10 posts per page)
*  **Reading time calculation** for posts
*  **Next.js Image optimization**
*  **Docker & Docker Compose support**
*  **Code syntax highlighting** using Prism.js

---

##  Project Structure

```
blog-platform/
├── posts/                      # MDX blog posts (15 posts)
├── public/
│   ├── images/                 # Static images
│   ├── sitemap.xml             # Generated sitemap
│   └── rss.xml                 # Generated RSS feed
├── scripts/
│   ├── generate-sitemap.js
│   └── generate-rss.js
├── src/
│   ├── components/             # Reusable React components
│   ├── lib/                    # Post utilities and helpers
│   ├── pages/                  # Next.js pages
│   └── styles/                 # Global and Prism styles
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── package.json
└── README.md
```

---

## 🛠️ Technology Stack

| Category          | Tools                     |
| ----------------- | ------------------------- |
| Framework         | Next.js 14 (Pages Router) |
| Language          | JavaScript (ES6+)         |
| Styling           | Plain CSS + CSS Variables |
| Content           | MDX                       |
| SEO               | next-seo                  |
| Code Highlighting | Prism.js                  |
| Containerization  | Docker & Docker Compose   |
| Runtime           | Node.js 18                |

---

## Prerequisites

Make sure you have:

* Node.js **v18+**
* npm
* Docker & Docker Compose

---

## Getting Started

### Local Development (Without Docker)

```bash
git clone https://github.com/sumanth0099/blogplatform-nextjs-project.git
cd blogplatform-nextjs-project
npm install
npm run dev
```

Open: **[http://localhost:3000](http://localhost:3000)**

---

### 🔹 Production Build (Without Docker)

```bash
npm run build
npm start
```

During build:

* Static pages are generated
* Sitemap is created
* RSS feed is generated

---

### 🔹 Docker Deployment 

```bash
docker-compose up --build -d
```

Useful commands:

```bash
docker-compose ps
docker-compose logs -f web
docker-compose down
```

Access: **[http://localhost:3000](http://localhost:3000)**

---

## 📄 Available Routes

| Route           | Description             |
| --------------- | ----------------------- |
| `/`             | Homepage (latest posts) |
| `/blog/1`       | Blog listing (page 1)   |
| `/blog/2`       | Blog listing (page 2+)  |
| `/posts/[slug]` | Individual blog post    |
| `/sitemap.xml`  | XML sitemap             |
| `/rss.xml`      | RSS feed                |
| `/*`            | Custom 404 page         |

---

## 📝 Writing Blog Posts

All posts are stored in `/posts` as `.mdx` files.

### Example MDX Format

```mdx
---
title: "Post Title"
date: "2024-01-15"
author: "Author Name"
tags: ["Next.js", "SEO"]
excerpt: "Short summary for previews and SEO."
---

## Content Starts Here

Write using Markdown syntax.
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

Place images in:

```
/public/images/
```

Use in MDX:

```mdx
![Alt text](/images/example.jpg)
```

Images are automatically optimized by Next.js.

---

## 🎨 Theme Customization

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

## 🔍 SEO Capabilities

* Dynamic title & meta descriptions
* Open Graph & Twitter Cards
* Canonical URLs
* Auto-generated sitemap
* Auto-generated RSS feed

---

## 🧪 Testing Support

The project includes `data-testid` attributes for easy testing, such as:

* `post-list`
* `post-card-{slug}`
* `pagination-next`
* `theme-toggle`
* `not-found-message`

---

## 🌍 Environment Variables

Defined in `.env.example`:

```env
PORT=3000
NODE_ENV=production
BASE_URL=http://localhost:3000
SITE_NAME=My Next.js Blog
SITE_DESCRIPTION=A modern static blog platform
```

---

## 📈 Performance Highlights

* All pages pre-rendered at build time
* Optimized images and code splitting
* Minimal CSS, no heavy frameworks

---

## 👤 Author

**Tetala Sumanth Reddy**

---