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
    left: 6%;
    bottom: 47%;
    font-size: 25px;
`;
export const Greet1 = styled.span`
    text-shadow: 1px 1px 4px #fff;
    font-family: inherit;
    width: 58%;
    position: relative;
    left: 6%;
    bottom: 44%;
    font-size: 17px;
`;