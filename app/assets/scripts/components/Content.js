import React from 'react';

// import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';
// import TodoFilter from './TodoFilter';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

const getContent = (content, language) => {
    switch (content) {
        case 'HOME':
            return (
                <Home />
            );
        case 'ABOUT':
            return (
                <About language={language} />
            );
        case 'SKILLS':
            return (
                <Skills />
            );
        case 'PORTFOLIO':
            return (
                <Portfolio />
            );
        case 'CONTACT':
            return (
                <Contact />
            );
    }
};

const Content = ({ content, animation, language }) => {
    return (
        <section className={'content' + (animation ? ' fade-out' : ' fade-in')}>
            {getContent(content, language)}
        </section>
    );
};

export default Content;