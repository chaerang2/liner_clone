import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <LeftMenu />
      </div>
    </Router>
  );
}

export default App;