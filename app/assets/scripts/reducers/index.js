import { combineReducers } from 'redux';
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';
import menu from './menu';
import content from './content';
import contentStatus from './contentStatus';
import animation from './animation';
import language from './language';
import data from './data';
import popup from './popup';
import popupContent from './popupContent';

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
    popupContent
});

export default todoApp;