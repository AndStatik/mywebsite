import React from "react";
import { connect } from "react-redux";
import {
  MyServices,
  Services,
  ServicesContainer,
  SingleService,
  OverlayPrice
} from "./servicesStyles";
import {
  Overlay,
  OverlayTitle,
  OverlayDesc,
  OverlayBlur,
  OverlayTurn,
} from "./projectsStyles";
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const ServicesPage = (props) => {
  return (
    <ServicesContainer>
      <MyServices>My Services</MyServices>
      <Services>
        <SingleService>
          <img src="personalWeb.png" alt="Personal Website" />
          <Overlay>
            <OverlayTitle style={{ fontSize: 18 + "px", marginTop: 60 + "px" }}>
              Personal Website
            </OverlayTitle>
            <OverlayDesc>
              Construction of a static personal website for you!
            </OverlayDesc>
            <OverlayPrice>
              {">$99"}
            </OverlayPrice>
          </Overlay>
        </SingleService>
        <SingleService>
          <img src="mobileApp.png" alt="Mobile Application" />
          <OverlayBlur>
            <OverlayTitle style={{ fontSize: 18 + "px", marginTop: 60 + "px" }}>
              Mobile Application
            </OverlayTitle>
            <OverlayDesc>
              Building a mobile app that fits your needs!
            </OverlayDesc>
            <OverlayPrice>
              {">$149"}
            </OverlayPrice>
          </OverlayBlur>
        </SingleService>
        <SingleService>
          <img src="ecomm.png" alt="Ecommerce Website" />
          <OverlayTurn>
            <OverlayTitle style={{ fontSize: 18 + "px", marginTop: 60 + "px" }}>
              E-Commerce Website
            </OverlayTitle>
            <OverlayDesc>
              Development of an e-commerce website for you!
            </OverlayDesc>
            <OverlayPrice>
              {">$199"}
            </OverlayPrice>
          </OverlayTurn>
        </SingleService>
      </Services>
      <p style={{textDecoration: "overline rgb(202,223,235) 2px", fontSize: 20+'px', marginTop: 50+'px'}}>My services are also available on Fiverr!</p>
      <SingleService style={{margin: "40px auto 0 auto"}}>
        <a href="https://www.fiverr.com/statkevskiy" target="_blank" rel="noopener noreferrer">
          <img src="myAvatar.png" alt="My Avatar" />
          <img style={{position: 'relative', top: '-70px', left: '125px', width: '75px'}} src="fiverr.png" alt="Fiverr" />
        </a>
      </SingleService>
      <p style={{textDecoration: "underline rgb(202,223,235) 2px", fontSize: 20+'px'}}>Something you’d like isn’t listed here? Feel out <Link to="/contact" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "rgb(158, 174, 183)"}}>this short form</Link> and I will get back to you asap!</p>
    </ServicesContainer>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {};
};

export default connect(mapState)(ServicesPage);
