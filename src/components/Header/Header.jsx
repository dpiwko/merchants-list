import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Logo from 'assets/images/logo.png'
import { unit } from 'assets/styles'
import { Button } from 'components'

export default () => (
  <StyledHeader>
    <nav>
      <NavLink exact to="/" title="Homepage">
        <StyledLogo src={Logo} alt="Logo" />
      </NavLink>
      <StyledAddButton>
        <NavLink to="/add" title="Add new merchant">
          +
        </NavLink>
      </StyledAddButton>
    </nav>
  </StyledHeader>
)

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const StyledHeader = styled('div')({
  marginBottom: 75,
})

const StyledLogo = styled('img')({
  width: 200,
})

const StyledAddButton = styled(Button)({
  width: 47,
  padding: '0 0 6px',
  fontSize: unit * 2.5,
  lineHeight: `${unit}px`,
  float: 'right',
})
 