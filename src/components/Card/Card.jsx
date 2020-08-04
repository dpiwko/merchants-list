import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { unit, colors } from 'assets/styles'
import { Button } from 'components'

const Card = (props) => {
  const { id, firstname, lastname, avatarUrl, email, phone, hasPremium } = props.data
  const avatar = avatarUrl ? avatarUrl : `https://api.adorable.io/avatars/100/${id}`
  
  return (
    <StyledWrapper className={hasPremium && 'hasPremium'}>
      <InnerWrapper>
        <StyledHeading>
          {firstname} {lastname}
        </StyledHeading>

        {hasPremium && <StyledBadge>Premium</StyledBadge>}

        <StyledAvatar src={avatar} alt="avatar" />
      </InnerWrapper>

      <InnerWrapper>
        <StyledLink href={`mailto: ${email}`}>Email: {email}</StyledLink>
        <StyledLink href={`tel: ${phone}`}>Phone: {phone}</StyledLink>
      </InnerWrapper>

      {props.children && <InnerWrapper>{props.children}</InnerWrapper>}

      <InnerWrapper>
        <Link to={props.linkPath}>
          <StyleButton className="is-tertiary">Edit</StyleButton>
        </Link>
        <StyleButton
          className="is-tertiary is-remove"
          onClick={() => props.handleRemove(id)}
        >
          Remove
        </StyleButton>
      </InnerWrapper>
    </StyledWrapper>
  )
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const StyledWrapper = styled('div')({
  position: 'relative',
  display: 'grid',
  gridTemplateRows: '0.25fr 1fr',
  minHeight: 300,
  marginBottom: 40,
  overflow: 'hidden',
  border: `4px solid ${colors.grey}`,
  borderRadius: 10,
  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
  '&.hasPremium': {
    borderColor: colors.tertiary,
  },
})

const InnerWrapper = styled('div')({
  position: 'relative',
  padding: `${unit * 1.25}px ${unit * 2}px`,
  '&:first-of-type': {
    backgroundColor: colors.primary,
  },
  '&.is-flex': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

const StyledHeading = styled('p')({
  display: 'inline-block',
  margin: 0,
  fontSize: `${unit * 2}px`,
  fontWeight: 'bold',
  color: colors.secondary,
})

const StyledBadge = styled('span')({
  marginLeft: unit,
  padding: 8,
  backgroundColor: colors.tertiary,
  color: colors.secondary,
  fontSize: unit / 1.5,
  fontWeight: 700,
  textTransform: 'uppercase',
  verticalAlign: 'super',
})

const StyledAvatar = styled('img')({
  position: 'absolute',
  right: 25,
  top: 10,
  width: 100,
  height: 100,
  border: `6px solid ${colors.primary}`,
  borderRadius: 50,
})

const StyledLink = styled('a')({
  display: 'block',
  marginBottom: 8,
  fontSize: unit * 1.15,
  color: colors.text,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
})

const StyleButton = styled(Button)({
  display: 'inline-block',
  margin: '5px 15px 5px 0',
})

// const StyledRemove = styled('span')({
//   display: 'block',
//   position: 'absolute',
//   right: 25,
//   top: 25,
//   width: 32,
//   height: 32,
//   backgroundColor: colors.error,
//   borderRadius: 5,
//   cursor: 'pointer',
//   '&::after': {
//     content: '"x"',
//     display: 'block',
//     fontSize: 23,
//     fontWeight: 700,
//     color: colors.secondary,
//     textAlign: 'center',
//   },
// })

export default Card
