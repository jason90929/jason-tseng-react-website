const popupIndex = (state = 0, action) => {
    switch (action.type) {
        case 'SET_POPUP_INDEX':
            return action.index;
        default:
            return state;
    }
};

export default popupIndex;