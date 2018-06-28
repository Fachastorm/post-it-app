
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitPost } from '../actions/actions';

class PostForm extends Component{ 
    constructor(props) {
    super(props)


    this.state = { 
        title:'', 
        body: ''
    }

    onChangeHandler = (event) => { 
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

}
}