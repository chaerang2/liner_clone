import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  withRouter
} from "react-router-dom";

import Header from "./components/Header"
import LeftMenu from './components/LeftMenu'
import ContentsList from './components/ContentsList'
import Detail from './components/Detail'
import "./App.scss"


function App() {
  let history = useHistory();
  useEffect(() => {
    history.push("/home");
  },[]);
  return (
    <Router>
      <div className="container">
        <Header />
        <LeftMenu />
        <div className="page_right">
          <Route
            exact path="/"
            render={() => <ContentsList rout="home" />}/>
          <Route
            path='/home'
            render={() => <ContentsList rout="home" />}/>
          <Route
            path='/myhighlights'
            render={() => <ContentsList rout="myhighlights" />}/>
          <Route path="/Detail/:id" component={Detail} />
        </div>
      </div>
    </Router>
  );
}

export default withRouter(App);