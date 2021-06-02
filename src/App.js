import React from "react";
import GlobalStyle from "./global";
import Navbar from "./Components/Navbar";
import { AppProvider } from "./context";
import MainPanel from "./Components/MainPanel";

const App = () => {


  return (
    <AppProvider>
      <GlobalStyle />
      <Navbar />
      <MainPanel />
    </AppProvider>

  );
}


export default App;
