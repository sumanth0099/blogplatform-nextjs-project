import Link from 'next/link'

export default function Pagination({ currentPage, totalPages, basePath }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="pagination" data-testid="pagination">
      {currentPage > 1 && (
        <Link
          href={`${basePath}/${currentPage - 1}`}
          className="pagination-btn"
          data-testid="pagination-prev"
        >
          Previous
        </Link>
      )}

      {currentPage === 1 && (
        <button className="pagination-btn" disabled data-testid="pagination-prev">
          Previous
        </button>
      )}

      {pages.map(page => (
        <Link
          key={page}
          href={`${basePath}/${page}`}
          className={`pagination-btn ${
            page === currentPage ? 'pagination-btn-active' : ''
          }`}
          data-testid={`pagination-page-${page}`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}/${currentPage + 1}`}
          className="pagination-btn"
          data-testid="pagination-next"
        >
          Next
        </Link>
      )}

      {currentPage === totalPages && (
        <button className="pagination-btn" disabled data-testid="pagination-next">
          Next
        </button>
      )}
    </div>
  )
}