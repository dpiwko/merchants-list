import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { unit, colors } from 'assets/styles'

const height = 42
export default styled('button')({
  height,
  display: 'block',
  minWidth: 200,
  margin: '20px auto',
  boxSizing: 'border-box',
  padding: `0 ${unit * 2}px`,
  borderBottom: `2px solid ${colors.tertiary}`,
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
})
