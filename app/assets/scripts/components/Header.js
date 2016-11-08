import React from 'react';
import { connect } from 'react-redux';

const Header = ({content}) => {
    var headerClassName = '';

    if (content === 'content') {
        headerClassName = ' has-content';
    }

    return (
        <header className="header">
            <h1 className={'main-title bask' + headerClassName}>
                Jason Tseng
            </h1>
            <p className={'sub-title bask' + headerClassName}>
                Front End Developer
            </p>
        </header>
    );
};

const getContent = (content) => {
    switch (content) {
        case 'about':
        case 'skills':
        case 'portfolio':
        case 'contact':
            return 'content';
        default:
            return 'home';
    }
};

const mapStateToProps = (state) => {
    return {
        content: getContent(state.content)
    };
};

export default connect(
    mapStateToProps
)(Header);