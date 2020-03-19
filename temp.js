import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect  } from 'react-router-dom';
import Login from "./Component/login"
// import Educator from "./Component/educator"


class App extends React.Component {
  render() {
      return (
        <Router>
          <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-dark ">
              <span className="navbar-brand font-weight-bolder"><img alt="navbar brand logo" className="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/220px-The_Earth_seen_from_Apollo_17.jpg" height="30vw" width="30vw" className="mr-2"/></span>
              <div className="navbar-header ">
                <Link className="navbar-brand navbar-centered" to="/" style={{color:"white"}}>Dream High</Link>
              </div>
            </nav>
            <br/>
             <Switch>
              <Route path="/" component={Login}/>
            </Switch>

          </React.Fragment>
        </Router>   
      );
  }
}
export default App;
