import React from "react";
import { connect } from "react-redux";
import {
  SDivider,
  MyProjects,
  ProjectsContainer,
  SingleProject,
  ThreeProjects,
  Overlay,
  OverlayBlur,
  OverlayTitle,
  OverlayDesc,
  OverlaySNS,
  OverlayTurn,
  BtnContainer,
  OpenSaveBtn,
} from "./projectsStyles";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export const ProjectsPage = (props) => {
  return (
    <ProjectsContainer>
      <MyProjects>My Projects</MyProjects>
      <ThreeProjects>
        <SingleProject>
          <img src="https://i.ibb.co/qFY7ZJ4/pokebay.png" alt="PokeBay logo" />
          <Overlay>
            <OverlayTitle>Pokebay</OverlayTitle>
            <OverlayDesc>
              An e-commerce website for people interested in stocking up with
              some pokemons!
            </OverlayDesc>
            <OverlaySNS>
              {PokeLinksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(45,45,45)" }}
                >
                  {icon}
                </a>
              ))}
            </OverlaySNS>
          </Overlay>
        </SingleProject>
        <SingleProject>
          <img
            src="https://camo.githubusercontent.com/628d0f1739c8349443a672faa432e212e8e11b51f2f1eca5f4f0272c234497ad/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d6874747073253341253246253246666f746f626c6f672e6a616b7562612e637a25324677702d636f6e74656e7425324675706c6f6164732532464a5f6c6f676f2e706e6726663d31266e6f66623d31"
            alt="Jukathon logo"
          />
          <OverlayBlur>
            <OverlayTitle>Jukathon</OverlayTitle>
            <OverlayDesc>
              It loads all sounds from user's device and lets play audio of
              their liking!
            </OverlayDesc>
            <OverlaySNS>
              {JukaLinksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(45,45,45)" }}
                >
                  {icon}
                </a>
              ))}
            </OverlaySNS>
          </OverlayBlur>
        </SingleProject>
        <SingleProject>
          <img
            src="https://i.ibb.co/ynrHsRg/hiitcoin.png"
            alt="hiitcoin logo"
          />
          <OverlayTurn>
            <OverlayTitle>HIITCoin</OverlayTitle>
            <OverlayDesc>
              A minimal mobile app that lets design and perform workouts!
            </OverlayDesc>
            <OverlaySNS>
              {HiiTLinksArray.map(({ icon, label, to }) => (
                <a
                  href={to}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(45,45,45)" }}
                >
                  {icon}
                </a>
              ))}
            </OverlaySNS>
          </OverlayTurn>
        </SingleProject>
      </ThreeProjects>
      <SDivider />
      <MyProjects>My Resume</MyProjects>
      <BtnContainer>
        <OpenSaveBtn><span>Open in New Tab</span></OpenSaveBtn>
        <OpenSaveBtn><span>Download</span></OpenSaveBtn>
      </BtnContainer>
    </ProjectsContainer>
  );
};

const PokeLinksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/Bisque-gs/graceshopper-project",
  },
  {
    label: "Website",
    icon: <AiOutlineLink />,
    to: "https://grace-pokebay.herokuapp.com/",
  },
];

const JukaLinksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/AndStatik/Jukathon",
  },
];

const HiiTLinksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/HIITCoin/HiiTCoin",
  },
  {
    label: "Website",
    icon: <AiOutlineLink />,
    to: "https://hiitcoin.netlify.app/",
  },
];

const mapState = (state) => {
  return {};
};

export default connect(mapState)(ProjectsPage);
