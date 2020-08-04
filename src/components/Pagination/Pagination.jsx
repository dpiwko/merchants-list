import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { unit, colors } from 'assets/styles'

export default (props) => {
  const { currentPage, numberOfPages, changePage } = props
  const pagesAmount = [...Array(numberOfPages).keys()].map((i) => i + 1)

  return (
    <nav>
      <StyledPagination>
        {pagesAmount.map((pageNumber) => (
          <StyledPaginationItem
            className={currentPage === pageNumber ? 'is-active' : ''}
            onClick={() => changePage(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </StyledPaginationItem>
        ))}
      </StyledPagination>
    </nav>
  )
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const StyledPagination = styled('ul')({
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin: 25,
  listStyle: 'none',
})

const StyledPaginationItem = styled('li')({
  width: 50,
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 6px',
  fontSize: unit * 1.5,
  color: colors.secondary,
  textAlign: 'center',
  backgroundColor: colors.grey,
  borderRadius: 50,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: darken(0.15, colors.grey),
  },
  '&.is-active': {
    backgroundColor: colors.primary,
    pointerEvents: 'none',
    cursor: 'default',
  },
})
