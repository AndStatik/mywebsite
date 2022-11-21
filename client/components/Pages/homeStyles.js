import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  width: 620px;
  height: 490px;
  color: rgb(45, 45, 45);
`;

export const Banner = styled.div`
	opacity: ${({ theme }) => theme.img};
	margin: -90px 0;
	background-image: url(https://i.ibb.co/Jm1LDfF/Welcome-Portrait1.png);
	background-repear: no-repeat;
	position: relative;
	bottom: -30%;
	left: -1%;
	width: 102%;
	height: 100%;
`;

export const Gradient = styled.div`
	background-image: linear-gradient( to right, 
		${({ theme }) => theme.bg2} 0%, 
		rgba(0, 0, 0, 0) 10%, 
		rgba(0, 0, 0, 0) 90%, 
		${({ theme }) => theme.bg2} 100%
	);
	width: 100%;
	height: 100%;
`;

export const MyName = styled.span`
  font-family: inherit;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.text};
`;

export const Greet = styled.span`
  font-family: inherit;
  position: relative;
  width: 28%;
  left: 6%;
  bottom: 8%;
  font-size: 25px;
`;
export const Greet1 = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: inherit;
  width: 58%;
  position: relative;
  left: 6%;
  bottom: 3%;
  font-size: 17px;
`;
export const Greet2 = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  width: 33%;
  position: relative;
  left: 50%;
  bottom: 58%;
  font-size: 47px;
  transform: rotate(-12deg);
`;
export const Greet3 = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  width: 38%;
  position: relative;
  left: 32%;
  bottom: -4%;
  font-size: 47px;
  transform: rotate(5deg);
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
	margin-top: 20px;
  width: min-content;
  img {
    margin: 20px 20px 0 20px;
    width: 187px;
    opacity: ${({ theme }) => theme.img};
  }
  a {
    color: inherit;
    text-decoration: none;
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
