import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoFilter from './TodoFilter';
import About from './About';
import Skills from './Skills';

const getContent = (content) => {
    switch (content) {
        case 'HOME':
            return (
                'HOME'
            );
        case 'ABOUT':
            return (
                <About />
            );
        case 'SKILLS':
            return (
                <Skills />
            );
        case 'PORTFOLIO':
            return (
                <div>
                    <AddTodo />
                    <VisibleTodoList />
                    <TodoFilter />
                </div>
            );
        case 'CONTACT':
            return (
                'Contact'
            );
        default:
            return (
                ''
            );
    }
};

const Content = ({ content }) => {
    return (
        <section className="content">
            {getContent(content)}
        </section>
    );
};

export default Content;