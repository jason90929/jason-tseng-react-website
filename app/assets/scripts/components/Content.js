import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoFilter from './TodoFilter';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const getContent = (content) => {
    switch (content) {
        case 'HOME':
            return (
                <Home />
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
                <Contact />
            );
    }
};

const Content = ({ content, animation }) => {
    return (
        <section className={'content' + (animation ? ' fade-out' : ' fade-in')}>
            {getContent(content)}
        </section>
    );
};

export default Content;