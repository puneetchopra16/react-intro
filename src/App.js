import React, { Component } from 'react';
import Display from './Display';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
      <div id ="head">
        <h1>Hii, I am react app!!</h1>
        </div>
        <div id="app1">
        <Display name='puneet' age='20'/>
        </div>
        <div id="app2">
        <Display name='gurudeep' age='20'/>
        </div>
      </div>
    );
  }
}

export default App;