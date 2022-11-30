import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const ProjectsContainer = styled.div`
  width: 100%;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MyProjects = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  font-size: 47px;
  transform: rotate(-7deg);
  margin-bottom: 50px;
  text-align: center;
`;

export const ThreeProjects = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  margin: 20px 0;
  padding: 0 50px;
    
`;

export const SingleProject = styled.div`
  width: 250px;
  border-radius: 50%;
  position: relative;
  img {
    width: 100%;
    display: block;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(202, 223, 235, 0.9);
  color: #000;
  font-family: 'Quicksand', sans-serif;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  :hover {
    opacity: 1;
  }
  :hover>* {
    transform: translateY(0);
  }
`;

export const OverlayTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-top: -45px;
`;

export const OverlayDesc = styled.p`
  font-size: 1.25em;
  margin-top: 0.25em;
  text-align: center;
  padding: 0 5px;
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg};
  margin: 0;
`;
