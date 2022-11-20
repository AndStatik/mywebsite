import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer"
import { SLayout, SMain } from "./styles";


const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        {children}
        <Footer />
      </SMain>
    </SLayout>
  );
};

export default Layout;
