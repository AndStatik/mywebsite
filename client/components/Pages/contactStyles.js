import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const ContactContainer = styled.div`
  width: 100%;
  #contact {
    width: 100%;
    height: 600px;
  }
    @media screen and (max-width: 850px) {
    .contact-wrapper {
      display: flex;
      flex-direction: column;
    }
    .direct-contact-container, .form-horizontal {
      margin: 0 auto;
    }

    .direct-contact-container {
      margin-top: 60px;
      max-width: 300px;
    }
    .social-media-list li {
      height: 60px;
      width: 60px;
      line-height: 60px;
    }
    .social-media-list li:after {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  @media screen and (max-width: 569px) {

    .direct-contact-container, .form-wrapper {
      float: none;
      margin: 0 auto;
    }
    .form-control, textarea {

      margin: 0 auto;
    }

    .name, .email, textarea {
      width: 280px;
    }

    .direct-contact-container {
      margin-top: 60px;
      max-width: 280px;
    }
    .social-media-list {
      left: 0;
    }
    .social-media-list li {
      height: 55px;
      width: 55px;
      line-height: 55px;
      font-size: 2rem;
    }
    .social-media-list li:after {
      width: 55px;
      height: 55px;
      line-height: 55px;
    }

  }

  @media screen and (max-width: 410px) {
    .send-button {
      width: 99%;
    }
  }
`;

export const ContactMe = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  font-size: 47px;
  transform: rotate(-7deg);
  margin: 15px auto 50px auto;
  display: flex;
  justify-content: center;
  color: rgb(45, 45, 45);
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;

  .form-horizontal {
    max-width: 400px;
    font-family: "Lato";
    font-weight: 400;
  }

  .form-control,
  textarea {
    width: 400px;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    letter-spacing: 1px;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.bg};
    border-radius: 4px;
  }

  .send-button {
    margin-top: 15px;
    height: 34px;
    width: 400px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.bg};
    border-radius: 4px;
  }

  .alt-send-button {
    width: 400px;
    height: 34px;
    transition: all 0.2s ease-in-out;
  }

  .send-text {
    display: block;
    margin-top: 10px;
    font: 700 12px "Lato", sans-serif;
    letter-spacing: 2px;
  }

  .alt-send-button:hover {
    transform: translate3d(0px, -29px, 0px);
  }
`;

/* Begin Right Contact Page */

export const DirectContactContainer = styled.div`
  max-width: 400px;

  //   Location, Phone, Email Section
  .contact-list {
    list-style-type: none;
    margin-left: -30px;
    padding-right: 20px;
  }

  .list-item {
    line-height: 4;
    color: #aaa;
  }

  .contact-text {
    font: 300 18px "Lato", sans-serif;
    letter-spacing: 1.9px;
    color: ${({ theme }) => theme.text};
  }

  .place {
    margin-left: 62px;
  }

  .phone {
    margin-left: 56px;
  }

  .gmail {
    margin-left: 53px;
  }

  .contact-text a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition-duration: 0.2s;
  }

  .contact-text a:hover {
    color: #fff;
    text-decoration: none;
  }
`;