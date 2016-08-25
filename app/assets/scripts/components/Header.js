import React from 'react';

const Header = ({content}) => {
    var headerClassName = '';

    if (content === 'CONTENT') {
        headerClassName = 'has-content';
    }

    return (
        <header className="header bask">
            <h1 className={'main-title ' + headerClassName}>
                Jason Tseng
            </h1>
            <h2 className={'sub-title ' + headerClassName}>
                Front End Developer
            </h2>
        </header>
    );
};

export default Header;