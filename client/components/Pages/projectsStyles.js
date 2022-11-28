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
  #fProj {
    opacity: 1;
    background-color: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png)
  }
  #fProj:hover {
    background-color: #9ba6e2;
    opacity: 0.4;
  }

  #sProj {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png)
  }
  #tProj {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png)
  }
`;

export const SingleProject = styled.div`
  width: 200px;
  height: 200px;
  background: black;
  opacity: 0.2;
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg};
    margin: 0;
`;
