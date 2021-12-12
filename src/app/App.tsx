import * as React from 'react';
import {ReactComponent as Logo} from './../../assets/logo.svg';

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to the boilerplate for your front end projects!</h1>
      <div className="logo-container">
        <Logo/>
      </div>
    </div>
  )
}

export default App;
