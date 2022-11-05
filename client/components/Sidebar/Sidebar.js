import React from 'react'
import { SDivider, SLogo, SSearch, SSearchIcon, SSidebar } from './styles'
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = () => {
  return (
    <SSidebar>
      <SLogo>
      <img src="https://i.ibb.co/tDWQ789/logo.png" alt="logo" />
      </SLogo>
      <SSearch>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input placeholder='Search'/>
      </SSearch>
      <SDivider />
    </SSidebar>
  )
}

export default Sidebar