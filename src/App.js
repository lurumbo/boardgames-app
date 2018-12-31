import React, { Component } from 'react';
import Router from './components/Router';
import './css/index.css';

class App extends Component {

  render () {
    return (
        <React.Fragment>          
          <Router />        
        </React.Fragment>
    );
  }
}

export default App;
