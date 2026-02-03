import React from "react";

import Login from "./pages/Login";
import GlobalStyle from "./styles/GlobalStyles";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Login />

    </div>
  );
}

export default App;
