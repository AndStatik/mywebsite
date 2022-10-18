import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* The navbar will show these links after you log in */}
    <nav>
      {(
        <div class="wrapper">
          <div class="sidebar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div class="social_media">
              <a href="https://www.linkedin.com/in/andrey-statkevskiy/" target='_blank'><i class="fab fa-linkedin"></i></a>
              <a href="https://github.com/AndStatik" target='_blank'><i class="fab fa-github"></i></a>
              <a href="https://www.instagram.com/andstatik/" target='_blank'><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  </div>
)

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
