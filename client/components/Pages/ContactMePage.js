import React, { useContext } from "react";
import { connect } from "react-redux";
import {
  ContactContainer,
  ContactMe,
  ContactWrapper,
  DirectContactContainer,
} from "./contactStyles";
import { MdPlace, MdPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "./../../App";

export const ContactMePage = (props) => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <ContactContainer>
      <section id="contact">
        <ContactMe>Contact</ContactMe>

        <ContactWrapper>
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          <DirectContactContainer>
            <ul className="contact-list">
              <li className="list-item">
                <MdPlace
                  style={
                    theme === "dark"
                      ? { color: "rgb(210,210,210)", fontSize: 26+"px" }
                      : { color: "rgb(45,45,45)", fontSize: 26+"px" }
                  }
                />
                <span className="contact-text place">Brooklyn, NY</span>
              </li>

              <li className="list-item">
                <MdPhone
                  style={
                    theme === "dark"
                      ? { color: "rgb(210,210,210)", fontSize: 26+"px" }
                      : { color: "rgb(45,45,45)", fontSize: 26+"px" }
                  }
                />
                <span className="contact-text phone">
                  <a href="tel:1-929-461-3168" title="Give me a call">
                    (929) 461-3168
                  </a>
                </span>
              </li>

              <li className="list-item">
                <FaEnvelope
                  style={
                    theme === "dark"
                      ? { color: "rgb(210,210,210)", fontSize: 26+"px" }
                      : { color: "rgb(45,45,45)", fontSize: 26+"px" }
                  }
                />
                <span className="contact-text gmail">
                  <a href="mailto:andstatik@gmail.com" title="Send me an email">
                    andstatik@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </DirectContactContainer>
        </ContactWrapper>
      </section>
    </ContactContainer>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {};
};

export default connect(mapState)(ContactMePage);
