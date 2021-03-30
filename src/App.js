import logo from './assets/skate.png';
import './App.css';
import React from "react";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Dashboard from "./views/Dashboard";
import EditProfile from "./views/EditProfile";
import { Route, BrowserRouter, Switch, Redirect  } from 'react-router-dom';
import PrivateRoute from './private-route';


function App() {
  return (
    <div id = "main">
      <div id = "Head" >
        <p id = "title"> Welcome to Dance Maker! Log in to start! >>></p>
        <div>
          <LoginButton className = "LoginButton"/>
          <LogoutButton className = "LoginButton"/>
        </div>
        </div>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/Home" component= {Home}/>
          <PrivateRoute exact path="/Dashboard" component= {Dashboard}/>
          <PrivateRoute exact path="/Profile" component= {Profile}/>
          <PrivateRoute exact path="/EditProfile" component= {EditProfile}/>
        </Switch>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
