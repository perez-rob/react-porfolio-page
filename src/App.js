import React from "react";
import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";

import "materialize-css/dist/css/materialize.min.css";
import "./style.module.css";
import "./style.css";
import Subheader from "./components/Subheader";

function App() {
  return (
    <div className="App">
      <Home />
      <Subheader />
      <AboutMe />
    </div>
  );
}

export default App;
