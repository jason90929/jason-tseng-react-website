import React from 'react';

const Header = ({content}) => {
    var headerClassName = '';

    if (content === 'CONTENT') {
        headerClassName = 'has-content';
    }

    return (
        <header className="header">
            <h1 className={'main-title bask ' + headerClassName}>
                Jason Tseng - Front End Developer
            </h1>
        </header>
    );
};

export default Header;