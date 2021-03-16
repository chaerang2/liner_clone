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


function App() {
  let history = useHistory();
  useEffect(() => {
    history.push("/home");
  },[]);
  return (
    <Router>
      <div>
        <Header />
        <Route
           exact path="/"
           render={() => <ContentsList rout="home" />}/>
        <Route
           path='/home'
           render={() => <ContentsList rout="home" />}/>
        <Route
           path='/myhighlights'
           render={() => <ContentsList rout="myhighlights" />}/>
        <LeftMenu />
        <Route path="/Detail/:id" component={Detail} />
      </div>
    </Router>
  );
}

export default withRouter(App);