const contentFilter = (state = false, action) => {
  switch (action.type) {
    case 'SET_MENU_ACTIVE':
      return action.bool;
    default:
      return state;
  }
};

export default contentFilter;