import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>My Website</h1>
    <nav>
      {(
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/">Home</Link>
        </div>
      )}
    </nav>
    <hr />
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
