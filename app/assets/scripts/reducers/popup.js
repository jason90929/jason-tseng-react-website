const popup = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return action.bool;
        default:
            return state;
    }
};

export default popup;