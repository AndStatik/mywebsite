import React,{ useContext } from "react";
import {connect} from 'react-redux'
import { SDivider, MyProjects, ProjectsContainer, SingleProject, ThreeProjects, Overlay, OverlayTitle, OverlayDesc } from './projectsStyles'
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
        <SingleProject>
          <img src="https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png" alt="PokeBay logo" />
          <Overlay>
            <OverlayTitle>Pokebay</OverlayTitle>
            <OverlayDesc>An e-commerce website for people interested in stocking up with some pokemons!</OverlayDesc>
          </Overlay>
        </SingleProject>
        <SingleProject>
          <img src="https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png" alt="PokeBay logo" />
        </SingleProject>
        <SingleProject>
          <img src="https://raw.githubusercontent.com/Bisque-gs/graceshopper-project/main/public/logo.png" alt="PokeBay logo" />
        </SingleProject>
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
