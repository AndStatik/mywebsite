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
      <p style={{textDecoration: "overline rgb(202,223,235) 2px", fontSize: 20+'px', marginTop: 20+'px'}}>My services are also available on Fiverr!</p>
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
