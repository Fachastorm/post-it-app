export function loadPosts(posts){ 
    return(dispatch) => { 
        dispatch({type: 'LOADING_POSTS'}); 
        return fetch('http://localhost:3001/api/v1/posts.json')
        .then(response => response.json())
        .then(posts => dispatch({type:'FETCH_POSTS', posts: posts}));
        }
    }


export function createPost(post){ 
    return(dispatch) => { 
        dispatch({type: 'SUBMITTING_POST' });
        return fetch('http://localhost:3001/api/v1/posts',
    {method: 'POST',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({post: post})})
    .then(response => response.json())
    .then(post => dispatch({type: 'SUBMIT_POST', post: post}))
    }
};