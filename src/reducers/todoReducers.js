const initialData = {
    lists: {
        list1: [], // Initialize list1 as an empty array
        list2: [], // Initialize list2 as an empty array
        list3: []  // Initialize list3 as an empty array
    }
};

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { listId, data } = action.payload;
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: [
                        ...(state.lists[listId] || []), // Ensure existing items are copied
                        {
                            id: new Date().getTime().toString(),
                            data: data
                        }
                    ]
                }
            };
        case "DELETE_TODO":
            const { listId: deleteListId, id } = action.payload;
            const updatedList = state.lists[deleteListId].filter((elem) => elem.id !== id);
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [deleteListId]: updatedList
                }
            };
        case "REMOVE_TODO":
            // Clear all lists
            return {
                ...state,
                lists: {
                    list1: [],
                    list2: [],
                    list3: []
                }
            };
        default:
            return state;
    }
};

export default todoReducers;
