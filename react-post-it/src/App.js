import React, { Component } from 'react';
import './App.css';
import PostPage from './containers/postPage'
import Home from './components/home'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
       <PostPage />
      </div>
    );
  }
}

export default App;
