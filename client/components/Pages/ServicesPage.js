import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const ServicesPage = (props) => {
  return (
    <div>
      <h1>Services Page</h1>
      <img style={{width: 350+'px'}} src="workInProgress.png" alt="Work In Progress" />
      <p>Someday I will list my services here</p>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {};
};

export default connect(mapState)(ServicesPage);
