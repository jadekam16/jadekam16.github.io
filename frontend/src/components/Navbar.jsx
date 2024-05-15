import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

export default function Navbar () {
  return (
    /* Get rid of bg color later as we want the scroll animation background here */
    <nav>
      <div className='flex items-center py-2 px-5 '>
        <div className='flex flex-shrink-0'>
          <img src='' alt="logo" className='w-4 h-4' />
        </div>
        <div className='flex items-center space-x-8 text-white hidden md:block tilt-neon text-3xl'>
          <NavLink
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            to="/"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/"
          >
            BLOGS
          </NavLink>
          <NavLink
            to="/"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
