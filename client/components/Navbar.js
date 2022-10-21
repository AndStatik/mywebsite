import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import MenuIcon from '../../public/MenuIcon.svg'
import ArrRight from '../../public/ArrRight.svg'
import SettLeft from '../../public/SettLeft.svg'
import IdLeft from '../../public/IdLeft.svg'
import PortLeft from '../../public/PortLeft.svg'
import ResLeft from '../../public/ResLeft.svg'
import BlogLeft from '../../public/BlogLeft.svg'
import EmailLeft from '../../public/EmailLeft.svg'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
            <MenuIcon />
          </a>
          {open && <div className='dropdown'>
              <a href='#' className='menu-item'>
                <span className='icon-button'><IdLeft /></span>
                About Me
                <span className='icon-right'><ArrRight /></span>
              </a>
              <a href='#' className='menu-item'>
                <span className='icon-button'><PortLeft /></span>
                Projects
                <span className='icon-right'><ArrRight /></span>
              </a>
              <a href='#' className='menu-item'>
                <span className='icon-button'><ResLeft /></span>
                Resume
              </a>
              <a href='#' className='menu-item'>
                <span className='icon-button'><BlogLeft /></span>
                Blog
              </a>
              <a href='#' className='menu-item'>
                <span className='icon-button'><EmailLeft /></span>
                Contact Me
              </a>
              <a href='#' className='menu-item'>
                <span className='icon-button'><SettLeft /></span>
                Settings
                <span className='icon-right'><ArrRight /></span>
              </a>
            </div>}
        </li>
        {/* <li className='nav-item'><Link to="/">Home</Link></li>
        <li className='nav-item'><Link to="/about">About Me</Link></li>
        <li className='nav-item'><Link to="/projects">Projects</Link></li>
        <li className='nav-item'><Link to="/resume">Resume</Link></li>
        <li className='nav-item'><Link to="/blog">Blog</Link></li>
        <li className='nav-item'><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  )
}


/**
 * CONTAINER
 */
const mapState = state => {
  return {
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch()
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
