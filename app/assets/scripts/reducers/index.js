import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';
import menu from './menu';
import content from './content';
import contentStatus from './contentStatus';
import animation from './animation';
import language from './language';
import data from './data';
import popup from './popup';
import popupIndex from './popupIndex';

const todoApp = combineReducers({
  // todos,
  // visibilityFilter,
  menu,
  content,
  contentStatus,
  animation,
  language,
  data,
  popup,
  popupIndex,
  routing: routerReducer
});

export default todoApp;