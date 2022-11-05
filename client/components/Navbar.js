import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    // <li className='nav-item'><Link to="/">Home</Link></li>
    // <li className='nav-item'><Link to="/about">About Me</Link></li>
    // <li className='nav-item'><Link to="/projects">Projects</Link></li>
    // <li className='nav-item'><Link to="/resume">Resume</Link></li>
    // <li className='nav-item'><Link to="/blog">Blog</Link></li>
    // <li className='nav-item'><Link to="/contact">Contact</Link></li>
    <div>Hi</div>
  );
};

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch();
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
