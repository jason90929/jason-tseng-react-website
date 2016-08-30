import React, { PropTypes } from 'react';

const Menu = ({ active, children, onClick }) => {
    if (active) {
        return (
            <li className="active">
                <a href="javascript:;">
                    {children}
                </a>
            </li>
        );
    }

    return (
        <li>
            <a href="javascript:;"
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
        </li>
    );
};

Menu.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Menu;