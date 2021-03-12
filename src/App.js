import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header'
import Contents from './components/Contents'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Contents />
      </div>
    </Router>
  );
}

export default App;