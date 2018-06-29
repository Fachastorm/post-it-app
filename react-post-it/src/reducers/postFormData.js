const initialState = { 
    title: '', 
    body: ''
}

export default (state = initialState, action) => { 
    switch(action.type) {
        case 'UPDATED_POST': 
        return action.postFormData

        case 'RESET_POST': 
        return initialState; 

        default: 
        return state;
    }
}