import React, { Component } from 'react';
import './App.css';
import PostPage from './containers/postPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import PostForm from './containers/postForm'
import postPage from './containers/postPage';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/posts' component={postPage} />
            <Route exact path='/posts/new' component={PostForm} />
            <Navbar />
          </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
