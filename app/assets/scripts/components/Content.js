import React, { Component } from 'react';

// import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';
// import TodoFilter from './TodoFilter';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

const getContent = (content, data) => {
    switch (content) {
        case 'HOME':
            return (
                <Home />
            );
        case 'ABOUT':
            return (
                <About data={data.about} />
            );
        case 'SKILLS':
            return (
                <Skills data={data.skills} />
            );
        case 'PORTFOLIO':
            return (
                <Portfolio data={data.portfolio} />
            );
        case 'CONTACT':
            return (
                <Contact data={data.contact} />
            );
    }
};

const Content = ({ content, animation, data }) => {
    return (
        <section className={'content' + (animation ? ' fade-out' : ' fade-in')}>
            {getContent(content, data)}
        </section>
    );
};

export default Content;