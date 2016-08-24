import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import content from './content';
import animation from './animation';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    content,
    animation
});

export default todoApp;