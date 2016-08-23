const contentFilter = (state = 'INDEX', action) => {
    switch (action.type) {
        case 'SET_CONTENT':
            return action.content;
        default:
            return state;
    }
};

export default contentFilter;