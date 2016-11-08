import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setContent, setAnimate, setMenuActive, setContentStatus } from '../actions';
import { browserHistory } from 'react-router'

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

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.content,
        doAnimate: getContent(ownProps.filter) !== state.contentStatus,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickWithFadeInAnimate: () => {
            dispatch(setAnimate(true));
            dispatch(setMenuActive(false));
            dispatch(setContentStatus(getContent(ownProps.filter)));

            setTimeout(function() {
                dispatch(setAnimate(false));
                dispatch(setContent(ownProps.filter));

                // router
                browserHistory.push('/' + ownProps.filter);
            }, 800);
        },
        onClick: () => {
            dispatch(setMenuActive(false));
            dispatch(setContentStatus(getContent(ownProps.filter)));
            dispatch(setContent(ownProps.filter));

            // router
            browserHistory.push('/' + ownProps.filter);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);