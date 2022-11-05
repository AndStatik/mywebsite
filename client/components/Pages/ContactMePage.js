import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const ContactMePage = props => {

  return (
    <div>
      <h1>Contact Me Page</h1>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
  }
}

export default connect(mapState)(ContactMePage);
