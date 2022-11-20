import React, { useContext } from "react";
import { SFooter, SFootLeft, SFootRight } from "./styles";
import { SLinkContainer, SLinkIcon } from "../Sidebar/styles";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineYoutube,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { RiTwitchLine } from "react-icons/ri";
import { ThemeContext } from "./../../App";

const Footer = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <SFooter>
      <SFootLeft>
        <p>© 2022 ANDREY STATKEVSKIY</p>
      </SFootLeft>
      <SFootRight>
          <div id="sns">
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
      </SFootRight>
    </SFooter>
  );
};

const linksArray = [
  {
    label: "GitHub",
    icon: <AiFillGithub />,
    to: "https://github.com/AndStatik",
  },
  {
    label: "LinkedIn",
    icon: <AiOutlineLinkedin />,
    to: "https://www.linkedin.com/in/andrey-statkevskiy/",
  },
  {
    label: "Instagram",
    icon: <AiOutlineInstagram />,
    to: "https://www.instagram.com/andstatik/",
  },
  {
    label: "YouTube",
    icon: <AiOutlineYoutube />,
    to: "https://www.youtube.com/@andstatik",
  },
  {
    label: "Twitch",
    icon: <RiTwitchLine />,
    to: "https://www.twitch.tv/andstatik",
  },
];
export default Footer;
