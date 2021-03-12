import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/Header"
import RightMenu from "./components/RightMenu"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <RightMenu />
      </div>
    </Router>
  );
}

export default App;