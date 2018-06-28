export default function postsReducer(state = [], action){ 
    switch(action.type) { 
        case 'FETCH_POSTS':
            return action.posts;
        case 'SUBMIT_POST': 
            return action.post;
        default: 
        return state;
    }
}