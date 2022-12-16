import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContactContainer,
  ContactMe,
  ContactWrapper,
  DirectContactContainer,
  SNSWrapper,
} from "./contactStyles";
import { MdPlace, MdPhone } from "react-icons/md";
import { FaEnvelope, FaTelegramPlane, FaTelegram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { ThemeContext } from "./../../App";
import { sendContactThunk } from "../../redux/contactForm";

export const ContactMePage = (props) => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const contactForm = useSelector((state) => state.contactForm);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(sendContactThunk(name, email, message));
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
  }
  return (
    <ContactContainer>
      <section id="contact">
        <ContactMe>Contact Me</ContactMe>
        <span style={{ color: "rgb(45,45,45)", fontSize: 18 + "px" }}>
          Please either message me using the links on the right, or fill out
          this form 😀
        </span>
        <ContactWrapper>
          <form
            id="contact-form"
            className="form-horizontal"
            role="form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <FaTelegramPlane
                  style={{ fontSize: 20 + "px", marginTop: 3 + "px" }}
                />
                <span className="send-text">SEND</span>
              </div>
            </button>
            {contactForm && (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "14" + "px",
                  width: "400" + "px",
                }}
              >
                {contactForm}
              </div>
            )}
          </form>

          <DirectContactContainer>
            <ul className="contact-list">
              <li className="list-item">
                <MdPlace
                  style={
                    theme === "dark"
                      ? { color: "rgb(210,210,210)", fontSize: 26 + "px" }
                      : { color: "rgb(45,45,45)", fontSize: 26 + "px" }
                  }
                />
                <span className="contact-text place">Brooklyn, NY</span>
              </li>

              <li className="list-item">
                <MdPhone
                  style={
                    theme === "dark"
                      ? { color: "rgb(210,210,210)", fontSize: 26 + "px" }
                      : { color: "rgb(45,45,45)", fontSize: 26 + "px" }
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
                      ? { color: "rgb(210,210,210)", fontSize: 26 + "px" }
                      : { color: "rgb(45,45,45)", fontSize: 26 + "px" }
                  }
                />
                <span className="contact-text gmail">
                  <a href="mailto:andstatik@gmail.com" title="Send me an email">
                    andstatik@gmail.com
                  </a>
                </span>
              </li>
            </ul>
            <SNSWrapper>
              <a
                href="https://t.me/andstatik"
                target="_blank"
                title="Message me via Telegram"
                rel="noopener noreferrer"
              >
                <FaTelegram style={{ color: "#02b2d6", fontSize: 70 + "px" }} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=19294613168"
                target="_blank"
                title="Message me via WhatsApp"
                rel="noopener noreferrer"
              >
                <BsWhatsapp
                  style={{ color: "rgb(57, 230, 60)", fontSize: 70 + "px" }}
                />
              </a>
            </SNSWrapper>
          </DirectContactContainer>
        </ContactWrapper>
      </section>
    </ContactContainer>
  );
};

export default ContactMePage;
