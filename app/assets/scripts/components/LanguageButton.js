import React, { PropTypes } from 'react';
import {Button} from 'react-mdl';

const LanguageButton = ({ active, children, onClick }) => {
    if (active) {
        return (
            <Button ripple className="mdl-icon-custom active">
                {children}
            </Button>
        );
    }

    return (
        <Button ripple className="mdl-icon-custom"
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
        </Button>
    );
};

LanguageButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default LanguageButton;