import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink className="navItem" to="/task-app">
        To Do List
      </NavLink>
      <NavLink className="navItem" to="/Calender">
        Calender
      </NavLink>
      <NavLink className="navItem" to="/extrapg">
        Extra Page
      </NavLink>
    </nav>
  )
}

export default Nav
