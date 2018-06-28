export function loadPosts(posts){ 
    return(dispatch) => { 
        dispatch({type: 'LOADING_POSTS'}); 
        return fetch('http://localhost:3001/api/v1/posts.json')
        .then(response => response.json())
        .then(posts => dispatch({type:'FETCH_POSTS', posts: posts}));
        }
    }
