import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const ProjectsPage = props => {

  return (
    <div>
      <h1>Projects Page</h1>
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

export default connect(mapState)(ProjectsPage);
