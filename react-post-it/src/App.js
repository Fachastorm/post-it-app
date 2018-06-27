import React, { Component } from 'react';
import './App.css';
import PostItContainer from './containers/postitcontainer'
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
       <PostItContainer />
      </div>
    );
  }
}

export default App;
