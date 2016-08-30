const content = (state = 'HOME', action) => {
    switch (action.type) {
        case 'SET_CONTENT':
            return action.content;
        default:
            return state;
    }
};

export default content;