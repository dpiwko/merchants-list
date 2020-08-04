import React from 'react'
import styled from 'styled-components'
import { unit, colors, zIndex } from 'assets/styles'

export default (props) => {
  const placeholder = props.placeholder ? props.placeholder : props.label
  const setPlaceholder = () => {
    return props.required ? `${placeholder} *` : placeholder
  }
  
  const validationMsg = props.validationMsg
    ? props.validationMsg
    : 'This field is required'

  return (
    <FieldStyled>
      <InputStyled
        {...props}
        className={props.isValid && 'hasError'}
        autoComplete="off"
        placeholder={setPlaceholder()}
      />
      <LabelStyled>
        {props.label}
        {props.required && <RequiredStyled>*</RequiredStyled>}
      </LabelStyled>

      {props.isValid && (
        <ValidationMsgStyled>{validationMsg}</ValidationMsgStyled>
      )}
    </FieldStyled>
  )
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const FieldStyled = styled('div')({
  position: 'relative',
  marginBottom: unit * 2,
})

const InputStyled = styled('input')({
  width: 400,
  boxSizing: 'border-box',
  padding: unit * 1.25,
  border: `2px solid ${colors.inputBorder}`,
  color: colors.text,
  fontSize: unit,
  outline: 'none',
  transition: '.2s',
  ':hover:enabled': {
    borderColor: colors.text,
  },
  ':focus:enabled': {
    borderColor: colors.primary,
  },
  ':placeholder-shown': {
    '+ label': {
      opacity: 0,
    },
  },
  ':not(:placeholder-shown)': {
    paddingTop: 28,
    paddingBottom: 12,
  },
  '::placeholder': {
    color: colors.grey,
  },
  ':disabled, :read-only': {
    opacity: 0.4,
    pointerEvents: 'none',
  },
  '&.hasError': {
    borderColor: colors.error,
  },
})

const LabelStyled = styled('label')({
  zIndex: zIndex.inputLabel,
  position: 'absolute',
  top: 8,
  left: 22,
  color: colors.primary,
  fontSize: unit / 1.5,
  pointerEvents: 'none',
  transition: '.2s',
  opacity: 1,
})

const RequiredStyled = styled('span')({
  display: 'inline-block',
  marginLeft: 4,
})

const ValidationMsgStyled = styled('span')({
  display: 'block',
  position: 'absolute',
  margin: '2px 0',
  fontSize: unit / 1.25,
  color: colors.error,
})
