import React from 'react'
import styled from 'styled-components'
import { Button } from 'components'
import { unit } from 'assets/styles'

const Card = (props) => {
  const { id, firstname, lastname, avatarUrl, email, phone, hasPremium } = props.data
  
  return (
    <StyledWrapper hasPremium={hasPremium}>
      <InnerWrapper>
        <StyledHeading>
          {firstname} {lastname}
        </StyledHeading>
        {phone}, {email}
        <StyledAvatar src={avatarUrl} />
      </InnerWrapper>
      <InnerWrapper>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </InnerWrapper>
    </StyledWrapper>
  )
}

const StyledWrapper = styled('div')({
  position: 'relative',
  display: 'grid',
  marginBottom: 15,
  gridTemplateRows: '0.25fr 1fr',
  minHeight: '380px',
  overflow: 'hidden',
  border: '2px solid #ccc',
})

const InnerWrapper = styled('div')({
  position: 'relative',
  padding: '17px 30px',
})

const StyledHeading = styled('p')({
  margin: '5px 0 0',
  fontSize: `${unit * 2}px`,
  fontWeight: 'bold',
})

const StyledAvatar = styled('img')({
  position: 'absolute',
  right: '25px',
  top: '25px',
  width: '86px',
  height: '86px',
  border: 'none',
  borderRadius: '50px',
})

export default Card
