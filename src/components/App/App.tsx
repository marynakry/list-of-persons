import React from 'react';
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import GlobalStyle from "../../global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Main/>
    </>
  );
}

export default App;
