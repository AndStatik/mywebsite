import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    img {
      margin: 50px 0;
    }
`;

export const MyName = styled.span`
    font-family: inherit;
    display: flex;
    justify-content: flex-end;
`;

export const Greet = styled.span`
    font-family: inherit;
    position: relative;
    width: 28%;
    left: 6%;
    bottom: 42%;
    font-size: 25px;
`;
export const Greet1 = styled.span`
    text-shadow: 1px 1px 4px #fff;
    font-family: inherit;
    width: 58%;
    position: relative;
    left: 6%;
    bottom: 39%;
    font-size: 17px;
`;
export const Greet2 = styled.span`
    text-shadow: 1px 1px 4px #fff;
    font-family: Satisfy;
    width: 33%;
    position: relative;
    left: 50%;
    bottom: 74%;
    font-size: 47px;
    transform: rotate(-12deg);
`;
export const Greet3 = styled.span`
    text-shadow: 1px 1px 4px #fff;
    font-family: Satisfy;
    width: 38%;
    position: relative;
    left: 34%;
    bottom: 35%;
    font-size: 47px;
    transform: rotate(5deg);
`;