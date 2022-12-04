import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from "../../styles/variables";

export const ProjectsContainer = styled.div`
  width: 100%;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  #chartdiv {
    width: 100%;
    height: 600px;
  }
  
  .demo-theme-dark .demo-background {
    background: #000;
  }
`;

export const MyProjects = styled.span`
  text-shadow: 1px 1px 4px #fff;
  font-family: Satisfy;
  font-size: 47px;
  transform: rotate(-7deg);
  margin: 15px auto 50px auto;
  text-align: center;
  color: rgb(45,45,45);
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
  width: 200px;
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
  :not(a) > * {
    transform: translateY(20px) rotate(10deg);
    transition: transform 0.25s;
  }
  * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  :hover {
    opacity: 1;
  }
  :hover>* {
    transform: translateY(0) rotate(0deg);
  }
`;

export const OverlayBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background: rgba(177,226,203,0.65);
  color: #000;
  font-family: 'Quicksand', sans-serif;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s;
  :not(a) > * {
    transform: translateY(20px) scale(0);
    transition: transform 0.25s;
  }
  * {
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  :hover {
    opacity: 1;
  }
  :hover>* {
    transform: translateY(0) scale(1);
  }
`;

export const OverlayTurn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(234,239,196,0.85);
  color: #000;
  font-family: 'Quicksand', sans-serif;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s;
  :not(a) > * {
    transform: translateY(20px) rotate(-0.25turn);
    transition: transform 0.35s;
  }
  * {
    transform: translateY(20px);
    transition: transform 0.35s;
  }
  :hover {
    opacity: 1;
  }
  :hover>* {
    transform: translateY(0) rotate(0turn);
  }
`;

export const OverlayTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: -30px;
`;

export const OverlayDesc = styled.p`
  margin-top: 10px;
  text-align: center;
  padding: 0 5px;
`;

export const OverlaySNS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  svg {
    font-size: 40px;
  }
  margin-top: -35px;
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg};
  margin: 0;
`;
