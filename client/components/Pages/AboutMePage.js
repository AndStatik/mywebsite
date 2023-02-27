import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const AboutMePage = (props) => {
  return (
    <div>
      <h1>About Me Page</h1>
      <img style={{width: 350+'px'}} src="workInProgress.png" alt="Work In Progress" />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {};
};

export default connect(mapState)(AboutMePage);
