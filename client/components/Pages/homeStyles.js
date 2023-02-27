import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 550px;
  color: rgb(45, 45, 45);
`;

export const Banner = styled.div`
	opacity: ${({ theme }) => theme.banner};
	margin: -115px 0;
	background-image: url(https://i.ibb.co/Jm1LDfF/Welcome-Portrait1.png);
	background-repeat: no-repeat;
	background-size: 800px;
	position: relative;
	bottom: -33%;
	width: 100%;
	height: 100%;
  @media (max-width: 801px) {
    display: none;
  }
`;

export const Gradient = styled.div`
	background-image: linear-gradient( to right, 
		${({ theme }) => theme.bg2} 0%, 
		rgba(0, 0, 0, 0) 7%, 
		rgba(0, 0, 0, 0) 93%, 
		${({ theme }) => theme.bg2} 100%
	);
	width: 100%;
	height: 100%;
  @media (max-width: 801px) {
    display: none;
  }
`;

export const MyName = styled.span`
    font-family: katsumi;
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.text};
`;

export const Greet = styled.span`
  font-family: inherit;
  position: relative;
  width: 28%;
  left: 8%;
  bottom: 4%;
  font-size: 25px;
  @media (max-width: 801px) {
    display: none;
  }
`;
export const Greet1 = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: inherit;
  width: 53%;
  position: relative;
  left: 8%;
  bottom: -2%;
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 801px) {
    width: 30%;
    left: 35%;
    bottom: -15%;
    text-align: justify;
  }
`;
export const Greet2 = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  width: 33%;
  position: relative;
  left: 58%;
  bottom: 62%;
  font-size: 47px;
  transform: rotate(-12deg);
  @media (max-width: 801px) {
    left: 42%;
    bottom: 44%;
    font-size: 35px;
    transform: none;
  }
`;
export const Greet3 = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  width: 38%;
  position: relative;
  left: 36%;
  bottom: -12%;
  font-size: 47px;
  transform: rotate(5deg);
  @media (max-width: 801px) {
    left: 39%;
    bottom: -7%;
    font-size: 35px;
    transform: none;
  }
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
	margin-top: 50px;
  width: min-content;
  .singleCarousel {
    img {
      margin: 20px 20px 0 20px;
      width: 187px;
      opacity: ${({ theme }) => theme.img};
      transition: opacity 1s ease-out 100ms;
    }
  }
  .singleCarousel:hover {
    img {
      opacity: ${({ theme }) => theme.name === "light" ? "100%" : "90%"};
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: 801px) {
    flex-direction: column;
    margin-top: -170px;
  }
`;

export const SingleCarousel = styled.div`
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg};
  }
`;

export const LabelCarousel = styled.span`
    display: flex;
    justify-content: center;
    font-size: 30px;
`;

export const DescriptionCarousel = styled.span`
  display: flex;
  margin: 5px 15px 5px 15px;
  font-size: 15px;
  text-align: justify;
`;
