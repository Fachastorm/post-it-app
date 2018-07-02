export default function postsReducer(state = [], action){ 
    switch(action.type) { 
        case 'GET_POST_SUCCESS':
            return action.posts;

        case 'CREATE_POST_SUCCESS':
        return[...state, action.post];

        case "REMOVE_POST": { 
            const idx=state.findIndex(post => post.id === action.postId);
            return[...state.slice(0, idx), ...state.slice(idx+1)]
        }
        default: 
        return state;
    }
}