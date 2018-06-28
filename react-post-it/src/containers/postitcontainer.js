import React, { Component } from 'react';
import Post from '../components/post';


class PostItContainer extends Component{
    constructor(props){ 
        super()
            this.state = {
                posts: []
            }
    }

    componentDidMount(){ 
        fetch('http://localhost:3001/api/v1/posts.json')
        .then(response => response.json())
        .then(json => { 
            this.setState({
                posts: json
            })
        }
        )};

    handleNewPost = () => { 
        axios.post('http://localhost:3001/api/v1/posts',
    {post:
        { 
            title:'', 
            body:''
        }
    }
    )
    .then(response => { 
        console.log(response)
    });
    }

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
export default PostItContainer