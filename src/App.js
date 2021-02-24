import logo from './assets/skate.png';
import './App.css';
import React from "react";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';


function App() {
  return (
    <>
      <LoginButton />
      <LogoutButton />
    </>
    
  );
}

export default App;
/// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to (idk what to name it ^_^)!
    //     </p>
    //   </header>
    // </div>
    