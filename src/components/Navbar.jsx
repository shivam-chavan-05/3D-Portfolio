import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className = "header">
        <NavLink to="/">
            <p>SC</p>
        </NavLink>
    </header>
  )
}

export default Navbar