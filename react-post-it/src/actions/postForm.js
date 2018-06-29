export const updatePostForm = postFormData => { 
    return { 
        type: 'UPDATED_POST', 
        postFormData
    }
}

export const resetPostForm = () => { 
    return { 
        type: 'RESET_POST'
    }
}