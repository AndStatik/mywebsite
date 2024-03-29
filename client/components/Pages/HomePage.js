import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Banner, Carousel, DescriptionCarousel, Gradient, Greet, Greet1, Greet2, Greet3, LabelCarousel, MyName, SingleCarousel, Welcome } from './homeStyles'

/**
 * COMPONENT
 */
export const HomePage = props => {

  return (
    <>
      <Welcome>
        <MyName>ANDREY STATKEVSKIY</MyName>
        <Banner>
          <Gradient />
        </Banner>
        <Greet>Hi, I'm Andrey!</Greet>
        <Greet1>Welcome to my website! I build websites and mobile applications of any purpose! I am responsible for everything, starting from drafting and design, and ending with deployment and hosting! If you have a dream project, then I could help you bridge it to reality!</Greet1>
        <Greet2>Hey there!</Greet2>
        <Greet3>Check it out!</Greet3>
      </Welcome>
      <br />
      <Carousel>
        {carouselArray.map(({ image, label, description, to }) => (
          <Link to={to} key={label}> 
            <SingleCarousel className='singleCarousel'>
              <img src={image} alt={label} border="0" />
              <LabelCarousel>{label}</LabelCarousel>
              <DescriptionCarousel>{description}</DescriptionCarousel>
            </SingleCarousel>
            </Link>
        ))}
      </Carousel>
    </>
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
