import React, { useContext, useState, useRef } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";
import {
  AiOutlineInfoCircle,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { MdOutlineNightlight } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { ImLab } from "react-icons/im";
import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setTheme, theme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      //search functionality
    }
  };
  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo isOpen={sidebarOpen}>
        <img src="https://i.ibb.co/NWvWNB8/logo1.png" alt="logo" />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: "fit-content" } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: "fit-content" } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label}>
          <SLink to="/" style={!sidebarOpen ? { width: "fit-content" } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <STheme>
        <SLinkContainer key={"Dark Theme"}>
          <SLink to="/" style={!sidebarOpen ? { width: "fit-content" } : {}}>
            <SLinkIcon>
              <MdOutlineNightlight />
            </SLinkIcon>
            {sidebarOpen && <SLinkLabel>Dark Theme</SLinkLabel>}
          </SLink>
        </SLinkContainer>
        {sidebarOpen && (
          <SThemeToggler
            isActive={theme === "dark"}
            onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
          >
            <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
          </SThemeToggler>
        )}
      </STheme>
      <SDivider />
      <SLinkContainer>
        <div id="sns">
          {sidebarOpen &&
            thirdLinksArray.map(({ icon, label, to }) => (
              <a href={to} key={label}>
                <SLinkIcon>{icon}</SLinkIcon>
              </a>
            ))}
        </div>
      </SLinkContainer>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Projects",
    icon: <ImLab />,
    to: "/projects",
    notification: 3,
  },
  {
    label: "About Me",
    icon: <AiOutlineInfoCircle />,
    to: "/about",
    notification: 0,
  },
  {
    label: "Contact Me",
    icon: <GrContactInfo />,
    to: "/contact",
    notification: 1,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
];

const thirdLinksArray = [
  {
    label: "GitHub",
    icon: <AiOutlineGithub />,
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
];

export default Sidebar;
