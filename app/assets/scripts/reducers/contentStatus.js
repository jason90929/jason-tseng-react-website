const contentStatus = (state = '', action) => {
  switch (action.type) {
    case 'SET_CONTENT_STATUS':
      return action.contentStatus;
    default:
      return state;
  }
};

export default contentStatus;