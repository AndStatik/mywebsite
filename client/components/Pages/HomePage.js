import React from 'react'
import {connect} from 'react-redux'
import { Carousel, DescriptionCarousel, Greet, Greet1, Greet2, Greet3, LabelCarousel, MyName, SingleCarousel, Welcome } from './homeStyles'

/**
 * COMPONENT
 */
export const HomePage = props => {

  return (
    <div>
      <video>
        <source src='https://streamable.com/e/s4uskx?autoplay=1&nocontrols=1' allow="autoplay" />
      </video>
        <MyName>ANDREY STATKEVSKIY</MyName>
        <img src="https://i.ibb.co/YB5qzQ1/avatar.jpg" alt="avatar" border="0" />
    </div>
  )
}

const carouselArray = [
  {
    label: "Projects",
    image: "https://i.ibb.co/wYJMCx7/Projects.png",
    to: "/projects",
    description: "Take a peek at things I have been working on. Those include personal projects, as well as educative projects!"
  },
  {
    label: "Blog",
    image: "https://i.ibb.co/QNF82N9/Blog.png",
    to: "/blog",
    description: "This is where I discuss and log the developmental process of my projects. There are personal stories too."
  },
  {
    label: "Services",
    image: "https://i.ibb.co/rx8z7FZ/Services.png",
    to: "/services",
    description: "Let’s build something cool! I could build something for you, or we could pair-program together!"
  },
];

/**
 * CONTAINER
 */
const mapState = state => {
  return {
  }
}

export default connect(mapState)(HomePage);
