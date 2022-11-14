import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const HomePage = props => {

  return (
    <div>
      <h1>Andrey Statkevskiy</h1>
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

export default connect(mapState)(HomePage);
