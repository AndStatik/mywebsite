import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const BlogPage = (props) => {
  return (
    <div>
      <h1>Blog Page</h1>
      <img style={{width: 350+'px'}} src="workInProgress.png" alt="Work In Progress" />
      <p>Someday will start sharing my thoughts here</p>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {};
};

export default connect(mapState)(BlogPage);
