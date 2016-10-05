import { combineReducers } from 'redux';
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';
import menu from './menu';
import content from './content';
import contentStatus from './contentStatus';
import animation from './animation';
import language from './language';
import data from './data';

const todoApp = combineReducers({
    // todos,
    // visibilityFilter,
    menu,
    content,
    contentStatus,
    animation,
    language,
    data
});

export default todoApp;