import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { unit, colors, zIndex } from 'assets/styles'

interface IInputAttr extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
}

export default (props: IInputAttr) => {
  const setPlaceholder = (): string => {
    return props.required ? `${props.placeholder} *` : props.placeholder
  }

  return (
    <FieldStyled>
      <InputStyled
        {...props}
        autoComplete="off"
        placeholder={setPlaceholder()}
      />
      <LabelStyled>
        {props.label}
        {props.required && <RequiredStyled>*</RequiredStyled>}
      </LabelStyled>
    </FieldStyled>
  )
}

const FieldStyled = styled('div')({
  position: 'relative',
  marginBottom: unit * 1.75,
})

const InputStyled = styled('input')({
  boxSizing: 'border-box',
  padding: unit * 1.25,
  border: `1px solid ${colors.inputBorder}`,
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
})

const LabelStyled = styled('label')({
  zIndex: zIndex.inputLabel,
  position: 'absolute',
  top: 8,
  left: 22,
  color: colors.secondary,
  fontSize: unit / 1.5,
  pointerEvents: 'none',
  transition: '.2s',
  opacity: 1,
})

const RequiredStyled = styled('span')({
  display: 'inline-block',
  marginLeft: 4,
})
