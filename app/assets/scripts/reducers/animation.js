const animation = (state = false, action) => {
    switch (action.type) {
        case 'SET_ANIMATE':
            return action.bool;
        default:
            return state;
    }
};

export default animation;