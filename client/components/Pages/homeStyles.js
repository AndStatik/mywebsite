import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const MyName = styled.span`
    font-family: inherit;
    display: flex;
    justify-content: flex-end;
`;

export const Welcome = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    img {
        max-width: 80%;
        height: auto;
        margin: ${v.lgSpacing} ${v.xxlSpacing} ${v.lgSpacing} ${v.xxlSpacing};
    }
`;

export const Greet = styled.span`
    font-family: inherit;
    position: relative;
    right: 78%;
    top: 29%;
    font-size: 25px;
`;