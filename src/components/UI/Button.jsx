import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { unit, colors } from 'assets/styles'

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const height = 47
export default styled('button')({
  height,
  width: 220,
  display: 'block',
  boxSizing: 'border-box',
  padding: `0 ${unit}px`,
  margin: '20px auto',
  fontFamily: 'inherit',
  fontSize: 18,
  fontWeight: 700,
  color: colors.secondary,
  textTransform: 'uppercase',
  backgroundColor: colors.background,
  border: 0,
  borderRadius: 50,
  cursor: 'pointer',
  outline: 'none',
  transition: 'all .25s linear',
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  ':hover:enabled': {
    backgroundColor: darken(0.1, colors.background),
  },
  ':active:enabled': {
    backgroundColor: lighten(0.05, colors.background),
  },
  ':disabled': {
    pointerEvents: 'none',
    cursor: 'default',
    opacity: 0.5,
  },
  '&.is-secondary': {
    backgroundColor: colors.grey,
    ':hover:enabled': {
      backgroundColor: darken(0.1, colors.grey),
    },
  },
  '&.is-tertiary': {
    width: 100,
    height: 30,
    fontSize: 11,
    backgroundColor: colors.grey,
  },
  '&.is-remove': {
    backgroundColor: colors.error,
  },
})
