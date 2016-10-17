import React, { Component } from 'react';

// import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';
// import TodoFilter from './TodoFilter';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import PortfolioStatus from '../containers/PortfolioStatus';
import Contact from './Contact';

const getContent = (content, data) => {
    switch (content) {
        case 'about':
            return (
                <About data={data.about} />
            );
        case 'skills':
            return (
                <Skills data={data.skills} />
            );
        case 'portfolio':
            return (
                <PortfolioStatus data={data.portfolio} />
            );
        case 'contact':
            return (
                <Contact data={data.contact} />
            );
        default:
            return (
                <Home />
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