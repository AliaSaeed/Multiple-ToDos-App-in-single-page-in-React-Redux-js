export const addTodo = ({ listId, data }) => {
    return {
        type: "ADD_TODO",
        payload: {
            listId,
            data
        }
    }
}
export const deleteTodo = ({ listId, id }) => {
    return {
        type: "DELETE_TODO",
        payload: {
            listId,
            id
        }
    }
}
export const removeTodo = (listId) => {
    return {
        type: "REMOVE_TODO",
        payload: {
            listId
        }
    }
}
