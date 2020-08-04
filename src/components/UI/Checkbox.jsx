import React from 'react'
import styled from 'styled-components'
import { unit, colors } from 'assets/styles'

export default (props) => {
  const setDisabledClass = () => {
    return props.disabled || props.readOnly ? 'is-disabled' : ''
  }

  return (
    <FieldStyled>
      <LabelStyled className={setDisabledClass()}>
        <InputStyled type="checkbox" {...props} />
        <CustomCheckboxStyled />
        {props.label}
        {props.required && <RequiredStyled>*</RequiredStyled>}
      </LabelStyled>
    </FieldStyled>
  )
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const dimension = 22
const borderWidth = 2
const FieldStyled = styled('div')({
  position: 'relative',
  width: '60%',
  margin: `0 auto ${unit * 1.75}px`,
})

const LabelStyled = styled('label')({
  display: 'block',
  paddingLeft: 35,
  minHeight: dimension,
  fontWeight: 400,
  fontSize: unit,
  color: colors.text,
  lineHeight: `${dimension}px`,
  textAlign: 'left',
  cursor: 'pointer',
  '&.is-disabled': {
    curors: 'default',
    opacity: 0.4,
    pointerEvents: 'none',
  },
})

const InputStyled = styled('input')({
  position: 'absolute',
  visibility: 'hidden',
  transition: '.2s',
  ':hover:enabled': {
    '+ span': {
      '::before': {
        borderColor: colors.primary,
      },
    },
  },
  ':checked': {
    '+ span': {
      '::before': {
        borderColor: colors.primary,
      },
      '::after': {
        opacity: 1,
      },
    },
  },
})

const CustomCheckboxStyled = styled('span')({
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: dimension,
    height: dimension,
    backgroundColor: colors.secondary,
    border: `${borderWidth}px solid ${colors.grey}`,
    boxSizing: 'border-box',
  },
  '::after': {
    content: '"\f00c"',
    position: 'absolute',
    top: 0,
    left: 4,
    fontFamily: 'FontAwesome',
    fontSize: unit / 1.15,
    lineHeight: `${dimension - borderWidth}px`,
    color: colors.primary,
    opacity: 0,
    transition: '.2s',
  },
})

const RequiredStyled = styled('span')({
  display: 'inline-block',
  marginLeft: 4,
})
