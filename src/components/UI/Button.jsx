import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { unit, colors } from 'assets/styles'

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const height = 42
export default styled('button')({
  height,
  display: 'block',
  minWidth: 200,
  margin: '20px auto',
  boxSizing: 'border-box',
  padding: `0 ${unit * 2}px`,
  border: 0,
  borderBottom: `2px solid ${colors.primary}`,
  fontFamily: 'inherit',
  fontSize: 18,
  fontWeight: 700,
  color: colors.secondary,
  textTransform: 'uppercase',
  backgroundColor: colors.background,
  cursor: 'pointer',
  outline: 'none',
  transition: 'all .25s linear',
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
})
