
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';
import Home from '../components/home';

class PostForm extends Component{ 
    constructor(props){ 
        super(props); 

        this.state = { 
            title:"", 
            body:""
        }
    }

    handleOnChange = event => { 
        const {name, value} = event.target; 
        this.setState({[name]: value});
    }

    handleSubmit = event => { 
        event.preventDefault(); 
        this.props.createPost(this.state, this.props.history)
        this.props.history.replace('/posts')
    }

    render(){ 
        return(
        <div className="App-header">
        <Home />
        <h1>Add a Post!</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
            <label htmlFor="title">Title:</label>
            <input 
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="title"
            value={this.state.title} />
        </div>
        <div>
            <label htmlFor="body">Note:</label>
            <input 
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="body"
            value={this.state.body} />
            <button type="submit">Add Post</button>
        </div>
        </form>
        </div>

    )}

}
export default connect(null, {createPost})(PostForm);