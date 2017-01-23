import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';
// import TodoFilter from './TodoFilter';
import Home from '../containers/Home';
import About from '../containers/About';
import Skills from '../containers/Skills';
import Portfolio from '../containers/Portfolio';
import Contact from '../containers/Contact';

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
        <Portfolio data={data.portfolio} />
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

const mapStateToProps = (state) => {
  return {
    content: state.content,
    contentStatus: state.contentStatus,
    data: state.data,
    animation: state.animation
  }
};

export default connect(
  mapStateToProps
)(Content);