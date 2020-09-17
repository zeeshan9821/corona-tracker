import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Logins from "./Logins";
import {Logout} from './components/Logout';
import {Protected} from "./components/Protected"
import Corona from "./corona";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Logins} />
        <Route path="/logout" component={Logout} />
        <Route path="/corona" component={Corona} />
      </div>
    );
  }
}

export default App;
