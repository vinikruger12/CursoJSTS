import React from "react";

import Login from "./pages/Login";
import GlobalStyle from "./styles/GlobalStyles";

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes/>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
