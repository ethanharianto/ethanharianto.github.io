import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import CustomCursor from "./CustomCursor";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(
      /(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(
        userAgent
      )
    );
  }, []);

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={chosenTheme} />
          </div>
        </>
      </ThemeProvider>
      {!isMobile && <CustomCursor />}
    </>
  );
}

export default App;
