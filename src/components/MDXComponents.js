import Image from 'next/image'

const MDXComponents = {
  img: (props) => (
    <Image
      {...props}
      width={800}
      height={450}
      style={{ width: '100%', height: 'auto' }}
      data-testid="optimized-image"
      alt={props.alt || 'Blog post image'}
    />
  ),
  pre: (props) => (
    <pre {...props} data-testid="code-block" />
  ),
}

export default MDXComponents