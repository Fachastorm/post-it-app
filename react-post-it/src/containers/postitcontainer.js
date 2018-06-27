import React, { Component } from 'react';
import Post from '../components/post';

class PostItContainer extends Component{
    constructor(props){ 
        super()
            this.state = {
                ideas: []
            }
    }

    componentDidMount(){ 
        fetch('http://localhost:3001/posts.json')
        .then(response => response.json())
        .then(json => { 
            this.setState({
                ideas: json
            })
        }
        )};

    render(){
        return(
            <div>
                <div>
                <button class="newPostButton">
                  New post!
                </button>
                </div>
                {this.state.ideas.map((idea) => {
                return (<Post idea={idea} key={idea.id} />)
                })}
            </div>
        )}
    };
export default PostItContainer