export default function postsReducer(state = [], action){ 
    switch(action.type) { 
        case 'GET_POST_SUCCESS':
            return action.posts;
        case 'CREATE_POST_SUCCESS':
        return[...state, action.post]; 
        default: 
        return state;
    }
}