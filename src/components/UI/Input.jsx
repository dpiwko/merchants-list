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
  width: '60%',
  margin: `0 auto ${unit * 2}px`,
  textAlign: 'center',
})

const InputStyled = styled('input')({
  width: '100%',
  boxSizing: 'border-box',
  padding: `${unit}px ${unit * 2}px`,
  color: colors.text,
  fontSize: unit,
  backgroundColor: colors.greyDB,
  border: `2px solid ${colors.greyDB}`,
  borderRadius: 50,
  outline: 'none',
  transition: '.2s',
  ':hover:enabled': {
    borderColor: colors.text,
  },
  ':focus:enabled': {
    borderColor: colors.tertiary,
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
    textTransform: 'uppercase',
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
  left: 28,
  color: colors.primary,
  fontSize: unit / 1.4,
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
