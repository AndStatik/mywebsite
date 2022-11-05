import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const AboutMePage = props => {

  return (
    <div>
      <h1>About Me Page</h1>
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

export default connect(mapState)(AboutMePage);
