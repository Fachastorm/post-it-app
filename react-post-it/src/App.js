import React, { Component } from 'react';
import './App.css';
import PostItContainer from './containers/postitcontainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-header">Post-It Notes</h1>
       <PostItContainer />
      </div>
    );
  }
}

export default App;
