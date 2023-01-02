import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MyServices = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  font-size: 47px;
  transform: rotate(-7deg);
  margin: 15px auto 50px auto;
  text-align: center;
  color: rgb(45,45,45);
`;

export const Services = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  margin: 20px 0;
  padding: 0 50px;
`;

export const SingleService = styled.div`
width: 200px;
border-radius: 50%;
position: relative;
img {
  width: 100%;
  display: block;
}
`;

export const OverlayPrice = styled.div`
    font-size: 17px;
    height: 50px;
    width: 50px;
    position: relative;
    top: 10px;
    left: 65px;
    background: white;
    border-radius: 50%;
    padding-top: 15px;
    text-align: center;
`
