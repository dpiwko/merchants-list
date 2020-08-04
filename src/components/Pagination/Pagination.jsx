import React from 'react'

export default (props) => {
  const { currentPage, numberOfPages, changePage } = props
  const pagesAmount = [...Array(numberOfPages).keys()].map((i) => i + 1)

  return (
    <nav>
      <ul>
        {pagesAmount.map((pageNumber) => (
          <li
            className={currentPage === pageNumber ? 'is-active' : ''}
            onClick={() => changePage(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </nav>
  )
}
