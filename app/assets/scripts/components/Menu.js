import React, { PropTypes } from 'react';

const Menu = ({ active, doAnimate, children, onClick, onClickWithFadeInAnimate }) => {
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
                    if (doAnimate) {
                        onClickWithFadeInAnimate();
                    }
                    else {
                        onClick();
                    }
                }}
                onClick={e => {
                    e.preventDefault();
                    if (doAnimate) {
                        onClickWithFadeInAnimate();
                    }
                    else {
                        onClick();
                    }
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