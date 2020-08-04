import React from 'react'
import styled, { keyframes } from 'styled-components'
import { unit, colors } from 'assets/styles'

export default (props) => {
  return (
    <>
      {props.isLoading 
        ? (
          <LoaderStyled>
            <LoaderWrapperStyled>
              <LoaderElementStyled />
              <LoaderElementStyled />
              <LoaderElementStyled />
            </LoaderWrapperStyled>
          </LoaderStyled>
        )
        : (
          <>{props.children}</>
        )
      }
    </>
  )
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */
 
const jumpAnimation = keyframes({
  '0%': {
    top: 8,
    height: 64,
  },
  '50%, 100%': {
    top: 24,
    height: 32,
  },
})

const LoaderStyled = styled('div')({
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: `rgba(255, 255, 255, .7)`,
})

const LoaderWrapperStyled = styled('div')({
  position: 'relative',
})

const LoaderElementStyled = styled('span')`
  display: inline-block;
  position: absolute;
  left: ${unit / 2}px;
  width: ${unit}px;
  height: ${unit * 2}px;
  background: ${colors.primary};
  animation: ${jumpAnimation} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  &:nth-child(1) {
    left: ${unit / 2}px;
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    left: ${unit * 2}px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: ${unit * 3.5}px;
    animation-delay: 0;
  }
`
