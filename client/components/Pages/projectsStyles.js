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
    background-color: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png)
  }
  #fProj:hover {
    background-color: ${({ theme }) => theme.bg};
    opacity: 1;
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
  width: 250px;
  height: 250px;
  color: ${({ theme }) => theme.bg};
  text-shadow: 1px 1px 4px #fff;
  #projInfo {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
  }
  #projInfo:hover {
    opacity: 1;
  }
  #projTitle {
    font-size: 30px;
    margin: 0 auto 20px auto;
  }
  #projDesc {
    font-size: 20px;
    margin: 0 20px;
  }
  #projSNS {
    display: flex;
    flex-direction: row;
    justify-content: center;
    svg {
      font-size: 30px;
    }
  }
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg};
    margin: 0;
`;
