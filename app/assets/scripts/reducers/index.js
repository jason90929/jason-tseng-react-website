import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import content from './content';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    content
});

export default todoApp;