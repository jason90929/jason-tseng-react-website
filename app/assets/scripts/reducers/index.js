import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import menu from './menu';
import content from './content';
import animation from './animation';
import language from './language';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    menu,
    content,
    animation,
    language
});

export default todoApp;