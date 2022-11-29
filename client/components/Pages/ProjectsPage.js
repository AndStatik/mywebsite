import React,{ useContext } from "react";
import {connect} from 'react-redux'
import { SDivider, MyProjects, ProjectsContainer, SingleProject, ThreeProjects } from './projectsStyles'
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
        <SingleProject id="fProj">
          <div id="projInfo">
            <p id="projTitle">PokeBay</p>
            <p id="projDesc">An e-commerce website for people interested in stocking up with some pokemons!</p>
            <div id="projSNS">
              {linksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  style={
                    theme === "dark"
                      ? { color: "rgb(210,210,210)" }
                      : { color: "rgb(45,45,45)" }
                }
              >
                <SLinkIcon>{icon}</SLinkIcon>
              </a>
            ))}
            </div>
          </div>
        </SingleProject>
        <SingleProject id="sProj" />
        <SingleProject id="tProj" />
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
