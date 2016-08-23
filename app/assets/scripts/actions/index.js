let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const getMenuList = (role) => {
    return {
        type: 'GET_MENU_LIST',
        role
    }
};

export const setContent = (content) => {
    return {
        type: 'SET_CONTENT',
        content
    }
};

export const getRole = (user) => {
    return {
        type: 'GET_ROLE',
        user
    }
};