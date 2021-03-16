import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from "./components/Header"
import RightMenu from "./components/RightMenu"
import LeftMenu from './components/LeftMenu'
import ContentsList from './components/ContentsList'
import Detail from './components/Detail'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={ContentsList} />
        <RightMenu />
        <LeftMenu />
        <Route path="/Detail/:id" component={Detail} />
      </div>
    </Router>
  );
}

export default App;