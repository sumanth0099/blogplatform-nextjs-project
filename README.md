##  README.md
```markdown
# Next.js Blog Platform with SSG, MDX, and SEO
A high-performance, SEO-optimized blog platform built with Next.js featuring Static Site Generation (SSG), MDX support, and comprehensive SEO features.

## 🚀 Features

-  **Static Site Generation (SSG)**: Pre-rendered pages for blazing-fast performance
-  **MDX Support**: Write blog posts with Markdown and embedded React components
-  **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, sitemap, and RSS feed
-  **Code Syntax Highlighting**: Beautiful code blocks with Prism.js
-  **Dark/Light Theme**: Toggle between themes with persistent preference
-  **Responsive Design**: Mobile-first, fully responsive layout
-  **Pagination**: Automatic pagination for blog listings (10 posts per page)
-  **Image Optimization**: Automatic image optimization with Next.js Image component
-  **Docker Support**: Fully containerized with Docker and Docker Compose
-  **Reading Time**: Automatic reading time calculation for posts

##  Project Structure

```
blog-platform/
├── posts/                          # 15 posts
│   ├── getting-started-with-nextjs.mdx
│   ├── understanding-static-site-generation.mdx
│   ├── building-seo-friendly-websites.mdx
│   ├── mastering-react-hooks.mdx
│   ├── modern-css-techniques.mdx
│   ├── introduction-to-typescript.mdx
│   └── post-7.mdx through post-15.mdx
├── public/                         
│   ├── images/                    
│   ├── sitemap.xml                
│   └── rss.xml                    
├── scripts/                        
│   ├── generate-sitemap.js       
│   └── generate-rss.js             
├── src/
│   ├── components/                 # React components
│   │   ├── Layout.js               # Main layout wrapper
│   │   ├── Header.js               # Site header with navigation
│   │   ├── Footer.js               # Site footer
│   │   ├── ThemeToggle.js          # Dark/Light theme switcher
│   │   ├── PostCard.js             # Blog post card component
│   │   ├── Pagination.js           # Pagination component
│   │   └── MDXComponents.js        # Custom MDX components
│   ├── lib/
│   │   └── posts.js                # Post utilities and data fetching
│   ├── pages/
│   │   ├── _app.js                 # Custom App component
│   │   ├── _document.js            # Custom Document component
│   │   ├── index.js                # Homepage
│   │   ├── 404.js                  # Custom 404 page
│   │   ├── blog/
│   │   │   ├── index.js            # Blog listing redirect
│   │   │   └── [page].js           # Paginated blog listing
│   │   └── posts/
│   │       └── [slug].js           # Individual blog post pages
│   └── styles/
│       ├── globals.css             # Global styles
│       └── prism.css               # Prism.js theme
├── .env                            # Environment variables
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore file
├── docker-compose.yml              # Docker Compose configuration
├── Dockerfile                      # Docker configuration
├── next.config.js                  
├── package.json                    
└── README.md                      
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Plain CSS with CSS Variables
- **Content**: MDX (Markdown + JSX)
- **SEO**: next-seo package
- **Code Highlighting**: Prism.js with rehype-prism-plus
- **Containerization**: Docker & Docker Compose
- **Node Version**: 18 (Alpine Linux)

## 📋 Prerequisites

- Node.js 18 or higher
- npm 
- Docker and Docker Compose 

## 🚀 Getting Started

### Local Development (Without Docker)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy .env.example to .env (already exists)
   # Edit .env if you want to change default values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build (Without Docker)

1. **Build the application**
   ```bash
   npm run build
   ```
   
   This command:
   - Builds the Next.js application
   - Generates the sitemap.xml
   - Generates the rss.xml

2. **Start the production server**
   ```bash
   npm start
   ```

### Docker Deployment (Recommended for Production)

1. **Build and start the container**
   ```bash
   docker-compose up --build -d
   ```
   
   This command will:
   - Build the Docker image
   - Install all dependencies
   - Build the Next.js application
   - Generate sitemap and RSS feed
   - Start the production server
   - Run health checks

2. **Check container status**
   ```bash
   docker-compose ps
   ```
   
   Wait until the health status shows as "healthy"

3. **View logs**
   ```bash
   docker-compose logs -f web
   ```

4. **Access the application**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Stop the container**
   ```bash
   docker-compose down
   ```

##  Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build for production + generate sitemap & RSS
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

##  Available Routes

### Public Routes
- `/` - Homepage (displays 6 most recent posts)
- `/blog/1` - Blog listing page 1
- `/blog/2` - Blog listing page 2 (if >10 posts)
- `/posts/[slug]` - Individual post pages
- `/sitemap.xml` - XML sitemap (generated after build)
- `/rss.xml` - RSS feed (generated after build)
- `/*` - 404 page for invalid routes

### Example URLs
- http://localhost:3000/
- http://localhost:3000/blog/1
- http://localhost:3000/posts/getting-started-with-nextjs
- http://localhost:3000/posts/understanding-static-site-generation
- http://localhost:3000/sitemap.xml
- http://localhost:3000/rss.xml

## Creating Blog Posts

Blog posts are stored in the `/posts` directory as `.mdx` files.

### Post Structure

Each post must have frontmatter metadata:

```mdx
---
title: 'Your Post Title'
date: '2024-01-15'
author: 'Author Name'
tags: ['Tag1', 'Tag2', 'Tag3']
excerpt: 'A brief summary of your post for SEO and previews.'
---

## Your Content Here

Write your post content using Markdown syntax.

### Code Examples

```javascript
function hello() {
  console.log("Hello, World!")
}
```

### Lists

- Item 1
- Item 2
- Item 3
```

### Adding Images

Place images in `/public/images/` and reference them in your MDX:

```mdx
![Alt text](/images/your-image.jpg)
```

Images will be automatically optimized by Next.js Image component.

##  Customization

### Changing Colors and Theme

Edit `/src/styles/globals.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --link-color: #0066cc;
  /* Add more custom properties */
}

.dark {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  --link-color: #66b3ff;
  /* Dark theme overrides */
}
```

##  SEO Features

### Meta Tags

All pages include:
- Title tags
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

### Sitemap

Automatically generated at `/public/sitemap.xml` during build.

Access at: `http://localhost:3000/sitemap.xml`

### RSS Feed

Automatically generated at `/public/rss.xml` during build.

Access at: `http://localhost:3000/rss.xml`

##  Responsive Design

The blog is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Testing

### Data TestID Attributes

All required elements have `data-testid` attributes for testing:

- `post-list` - Container for post listings
- `post-card-{slug}` - Individual post cards
- `read-more-{slug}` - Read more links
- `blog-post` - Blog post container
- `post-title` - Post title
- `post-content` - Post content
- `reading-time` - Reading time display
- `code-block` - Code blocks
- `optimized-image` - Optimized images
- `theme-toggle` - Theme toggle button
- `pagination` - Pagination container
- `pagination-next` - Next page button
- `pagination-prev` - Previous page button
- `pagination-page-{n}` - Page number links
- `not-found-message` - 404 message

### Manual Testing

Test these URLs:
1. Homepage: http://localhost:3000
2. Blog listing: http://localhost:3000/blog/1
3. Individual post: http://localhost:3000/posts/getting-started-with-nextjs
4. Pagination: http://localhost:3000/blog/2
5. 404 page: http://localhost:3000/random-url
6. Sitemap: http://localhost:3000/sitemap.xml
7. RSS feed: http://localhost:3000/rss.xml

## 📊 Performance

- **Static Site Generation**: All pages pre-rendered at build time
- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting per page
- **CSS**: Minimal CSS with no external frameworks

## Environment Variables

Required environment variables (see `.env.example`):

```env
PORT=3000                                  # Application port
NODE_ENV=production                        # Environment
BASE_URL=http://localhost:3000            # Base URL for SEO
SITE_NAME=My Next.js Blog                 # Site name
SITE_DESCRIPTION=A blog platform          # Site description
```

## Dependencies
### Production Dependencies
- `next` - Next.js framework
- `react` - React library
- `react-dom` - React DOM
- `gray-matter` - Frontmatter parsing
- `next-mdx-remote` - MDX rendering
- `next-seo` - SEO meta tags
- `reading-time` - Reading time calculation
- `prismjs` - Code syntax highlighting
- `rehype-prism-plus` - Prism integration
- `remark-gfm` - GitHub Flavored Markdown

### Development Dependencies
- `eslint` - JavaScript linting
- `eslint-config-next` - Next.js ESLint config

## Project Architecture

### Static Site Generation (SSG)

The blog uses Next.js SSG to pre-render all pages at build time:

- **Homepage**: Fetches and displays recent posts
- **Blog listing**: Generates paginated pages (10 posts per page)
- **Individual posts**: Creates a static page for each blog post

### Data Flow

1. Blog posts are written as `.mdx` files in `/posts`
2. During build, Next.js reads all MDX files
3. `gray-matter` parses frontmatter metadata
4. `next-mdx-remote` renders MDX to React components
5. Static HTML pages are generated
6. Sitemap and RSS feed are created

### Theme System

- CSS variables defined in `globals.css`
- Theme state managed in `ThemeToggle` component
- Preference stored in `localStorage`
- `dark` class added/removed on `<html>` element


## Author

Created by Tetala Sumanth Reddy
