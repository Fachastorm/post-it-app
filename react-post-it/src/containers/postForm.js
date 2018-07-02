
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';

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
    }
}

export default PostForm