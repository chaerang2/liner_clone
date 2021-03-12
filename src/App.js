import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from "./components/Header"
import RightMenu from "./components/RightMenu"
import LeftMenu from './components/LeftMenu'
import Contents from './components/Contents'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Contents />
        <RightMenu />
        <LeftMenu />
      </div>
    </Router>
  );
}

export default App;