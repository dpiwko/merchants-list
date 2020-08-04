import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { unit, colors } from 'assets/styles'

const Card = (props) => {
  const { id, firstname, lastname, avatarUrl, email, phone, hasPremium } = props.data
  const avatar = avatarUrl ? avatarUrl : `https://api.adorable.io/avatars/100/${id}`
  
  return (
    <StyledWrapper className={hasPremium && 'hasPremium'}>
      <InnerWrapper>
        <StyledAvatar src={avatar} />
        {hasPremium && <StyledBadge>Premium</StyledBadge>}
        <StyledHeadingLink to={props.linkPath}>
          {firstname} {lastname}
        </StyledHeadingLink>
        {phone}, {email}
        <StyledRemove onClick={() => props.handleRemove(id)}/>
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
  height: 250,
  marginBottom: 15,
  overflow: 'hidden',
  border: `4px solid ${colors.grey}`,
  '&.hasPremium': {
    borderColor: colors.tertiary,
  },
})

const InnerWrapper = styled('div')({
  position: 'relative',
  padding: '25px 30px 25px 200px',
})

const StyledHeadingLink = styled(Link)({
  display: 'block',
  margin: '5px 0',
  fontSize: `${unit * 2}px`,
  fontWeight: 'bold',
  textDecoration: 'none',
  color: colors.primary,
  '&:hover': {
    color: colors.tertiary,
  }
})

const StyledBadge = styled('span')({
  marginBottom: 12,
  padding: 8,
  backgroundColor: colors.tertiary,
  fontSize: unit / 1.5,
  textTransform: 'uppercase',
})

const StyledAvatar = styled('img')({
  position: 'absolute',
  left: 50,
  top: 25,
  width: 100,
  height: 100,
  border: 'none',
  borderRadius: 50,
})

const StyledRemove = styled('span')({
  display: 'block',
  position: 'absolute',
  right: 25,
  top: 25,
  width: 32,
  height: 32,
  backgroundColor: colors.error,
  borderRadius: 5,
  cursor: 'pointer',
  '&::after': {
    content: '"x"',
    display: 'block',
    fontSize: 23,
    fontWeight: 700,
    color: colors.secondary,
    textAlign: 'center',
  },
})

export default Card
