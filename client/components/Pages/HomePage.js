import React from 'react'
import {connect} from 'react-redux'
import { Greet, MyName, Welcome } from './homeStyles'

/**
 * COMPONENT
 */
export const HomePage = props => {

  return (
    <div>
      <MyName>ANDREY STATKEVSKIY</MyName>
      <Welcome>
        <img src="https://i.ibb.co/Jm1LDfF/Welcome-Portrait1.png" alt="Welcome-Portrait1" />
        <Greet>Hi, I'm Andrey!</Greet>
      </Welcome>
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
