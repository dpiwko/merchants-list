import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from 'assets/images/logo.png'
import { Button } from 'components'

export default () => (
  <nav>
    <NavLink exact to="/">
      <img src={Logo} alt="Logo" />
    </NavLink>
    <Button>
      <NavLink to="/add">Add new</NavLink>
    </Button>
  </nav>
)
