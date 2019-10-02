import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={SmurfList} />
        <Route path="/addSmurf" component={AddSmurf} />
      </div>
    );
  }
}

export default App;
