import React, { PropTypes } from 'react';

const Menu = ({ children, onClick }) => {
    return (
        <a href="javascript:;"
            className="toggle"
            onTouchEnd={e => {
                e.preventDefault();
                onClick();
            }}
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
                {children}
        </a>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Menu;