import React from 'react';
// import {Router} from 'react-router'
// import logo from './logo.svg';
import {withRouter} from 'react-router-dom'
import './App.scss';
import Nav from './index/Nav'
import Main from './index/Main'
function App() {
  return (

        <div className="App">
          <div className="indexLeft">
            <Nav></Nav>
          </div>
          <div id="indexMain">
            <Main></Main>
          </div>
        </div>
    
  );
}

export default withRouter(App);
