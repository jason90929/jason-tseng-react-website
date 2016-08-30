import React from 'react';

const Header = ({content}) => {
    var headerClassName = '';

    if (content === 'CONTENT') {
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

export default Header;