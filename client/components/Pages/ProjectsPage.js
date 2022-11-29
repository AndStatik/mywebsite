import React,{ useContext } from "react";
import {connect} from 'react-redux'
import { SDivider, MyProjects, ProjectsContainer, FirstProject, SecondProject, ThirdProject, ThreeProjects } from './projectsStyles'
import { AiFillGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { SLinkIcon } from "../Sidebar/styles";
import { ThemeContext } from "./../../App";

export const ProjectsPage = props => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <ProjectsContainer>
      <MyProjects>My Projects</MyProjects>
      <ThreeProjects>
        <FirstProject>
          <img src="https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png" alt="PokeBay logo" />
        </FirstProject>
        <SecondProject>
          <img src="https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png" alt="PokeBay logo" />
        </SecondProject>
        <ThirdProject>
          <img src="https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png" alt="PokeBay logo" />
        </ThirdProject>
      </ThreeProjects>
      <SDivider />
    </ProjectsContainer>
  )
}

const linksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/AndStatik",
  },
  {
    label: "Website",
    icon: <BiGlobe />,
    to: "https://grace-pokebay.herokuapp.com/",
  }
];

const mapState = state => {
  return {
  }
}

export default connect(mapState)(ProjectsPage);
