import React from "react";
import {connect} from 'react-redux'
import { SDivider, MyProjects, ProjectsContainer, SingleProject, ThreeProjects, Overlay, OverlayTitle, OverlayDesc, OverlaySNS } from './projectsStyles'
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export const ProjectsPage = props => {

  return (
    <ProjectsContainer>
      <MyProjects>My Projects</MyProjects>
      <ThreeProjects>
        <SingleProject>
          <img src="https://i.ibb.co/qFY7ZJ4/pokebay.png" alt="PokeBay logo" />
          <Overlay>
            <OverlayTitle>Pokebay</OverlayTitle>
            <OverlayDesc>An e-commerce website for people interested in stocking up with some pokemons!</OverlayDesc>
            <OverlaySNS>
              {linksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  style={{ color: "rgb(45,45,45)" }}
                >
                  {icon}
                </a>
              ))}
            </OverlaySNS>
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
    to: "https://github.com/Bisque-gs/graceshopper-project",
  },
  {
    label: "Website",
    icon: <AiOutlineLink />,
    to: "https://grace-pokebay.herokuapp.com/",
  }
];

const mapState = state => {
  return {
  }
}

export default connect(mapState)(ProjectsPage);
