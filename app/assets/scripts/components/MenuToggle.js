import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setMenuActive } from '../actions';

const MenuToggle = ({ children, onClick }) => {
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

const mapStateToProps = (state, ownProps) => {
    return {
        menu: ownProps.filter === state.menu
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setMenuActive(ownProps.filter));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuToggle);