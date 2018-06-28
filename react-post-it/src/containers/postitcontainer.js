import React, { Component } from 'react';
import Post from '../components/post';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/actions'


class PostItContainer extends Component{
    constructor(props){ 
        super()
            this.state = {
                posts: []
            }
    }

    componentDidMount(){ 
        this.props.loadPosts
       };

    // handleNewPost = () => { 
    //     axios.post('http://localhost:3001/api/v1/posts',
    // {post:
    //     { 
    //         title:'', 
    //         body:''
    //     }
    // }
    // )
    // .then(response => { 
    //     console.log(response)
    // });
    // }

    render(){
        return(
            <div>
                <div>
                <button className="newPostButton" onClick={this.handleNewPost}>
                  New post!
                </button>
                </div>
                {this.state.posts.map((post) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(PostItContainer);