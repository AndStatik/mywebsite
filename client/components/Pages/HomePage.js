import React from 'react'
import {connect} from 'react-redux'
import { Carousel, Greet, Greet1, Greet2, Greet3, MyName, Welcome } from './homeStyles'

/**
 * COMPONENT
 */
export const HomePage = props => {

  return (
    <>
      <Welcome>
        <MyName>ANDREY STATKEVSKIY</MyName>
        <img  src="https://i.ibb.co/Jm1LDfF/Welcome-Portrait1.png" alt="Welcome-Portrait1" />
        <Greet>Hi, I'm Andrey!</Greet>
        <Greet1>I build websites and mobile applications of any purpose! I am responsible for everything, starting from drafting and design, and ending with deployment and hosting! If you have a dream project, then I could help you bridge it to reality!</Greet1>
        <Greet2>Hey there!</Greet2>
        <Greet3>Check it out!</Greet3>
      </Welcome>
      <br />
      <Carousel>
        <a href="/"><img src="https://i.ibb.co/QNF82N9/Blog.png" alt="Blog" border="0" /></a>
        <a href="/"><img src="https://i.ibb.co/wYJMCx7/Projects.png" alt="Projects" border="0" /></a>
        <a href="/"><img src="https://i.ibb.co/rx8z7FZ/Services.png" alt="Services" border="0" /></a>
      </Carousel>
    </>
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
