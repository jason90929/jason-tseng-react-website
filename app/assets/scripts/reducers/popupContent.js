const popupContent = (state = '', action) => {
    switch (action.type) {
        case 'SET_POPUP_CONTENT':
            return action.content;
        default:
            return state;
    }
};

export default popupContent;