import React, { Component } from 'react';
import Post from '../components/post';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/actions'
import Home from '../components/home'
import Navbar from '../components/Navbar'

class PostPage extends Component{
    constructor(props){ 
        super()
            this.state = {
                posts: [],
                editingId: null
            }
    }

    componentDidMount(){ 
        this.props.loadPosts();
       };


    render(){
        return(
            <div>
            <Navbar />

                {this.props.posts.map((post) => {
                     
                return (<Post post={post} key={post.id} />)
                })}
            </div>
        )}
    };

    const mapStateToProps = (state) => { 
        return{ 
            posts: state.posts
        }
    }

    const mapDispatchToProps = (dispatch) => { 
        return bindActionCreators({ 
            loadPosts: loadPosts
        }, dispatch);
    }
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);