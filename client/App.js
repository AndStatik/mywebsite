import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
// import Navbar from "./components/Navbar";
// import Routes from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";
import { Helmet } from "react-helmet";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
       
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Andrey</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <Layout>test</Layout>
        </>
        {/* <Navbar />
        <Routes /> */}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
