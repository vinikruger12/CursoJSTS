import React from "react";

import Login from "./pages/Login";
import GlobalStyle from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

import history from "./services/history";

import { Router } from "react-router-dom/cjs/react-router-dom.min";

import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <Router history={history}>
      <ToastContainer autoClose={3000} className="toast-container" />
      <Header />
      <Routes/>
      <GlobalStyle />
    </Router>
  );
}

export default App;
