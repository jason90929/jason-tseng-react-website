// let nextTodoId = 0;
// export const addTodo = (text) => {
//     return {
//         type: 'ADD_TODO',
//         id: nextTodoId++,
//         text
//     }
// };
//
// export const setVisibilityFilter = (filter) => {
//     return {
//         type: 'SET_VISIBILITY_FILTER',
//         filter
//     }
// };
//
// export const toggleTodo = (id) => {
//     return {
//         type: 'TOGGLE_TODO',
//         id
//     }
// };

export const getMenuList = (role) => {
    return {
        type: 'GET_MENU_LIST',
        role
    }
};

export const setMenuActive = (bool) => {
    return {
        type: 'SET_MENU_ACTIVE',
        bool
    }
};

export const setAnimate = (bool) => {
    return {
        type: 'SET_ANIMATE',
        bool
    }
};

export const setContent = (content) => {
    return {
        type: 'SET_CONTENT',
        content
    }
};

export const setContentStatus = (contentStatus) => {
    return {
        type: 'SET_CONTENT_STATUS',
        contentStatus
    }
};

export const setPopupIndex = (index) => {
    return {
        type: 'SET_POPUP_INDEX',
        index
    }
};

export const showPopup = (bool) => {
    return {
        type: 'SHOW_POPUP',
        bool
    }
};

export const setLanguage = (language) => {
    return {
        type: 'SET_LANGUAGE',
        language
    }
};

export const getData = (language) => {
    return {
        type: 'GET_DATA',
        language
    }
};

export const getRole = (user) => {
    return {
        type: 'GET_ROLE',
        user
    }
};