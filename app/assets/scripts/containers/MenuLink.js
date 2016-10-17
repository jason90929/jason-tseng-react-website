import { connect } from 'react-redux';
import { setContent, setAnimate, setMenuActive, setContentStatus } from '../actions';
import Menu from '../components/Menu';
import { browserHistory } from 'react-router'

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

                browserHistory.push('/' + ownProps.filter);
            }, 800);
        },
        onClick: () => {
            dispatch(setMenuActive(false));
            dispatch(setContentStatus(getContent(ownProps.filter)));
            dispatch(setContent(ownProps.filter));

            browserHistory.push('/' + ownProps.filter);
        }
    };
};

const MenuLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuLink;


// import React from 'react';
// import { Link } from 'react-router';
//
// const MenuLink = ({ filter, children }) => {
//     console.log(filter);
//     console.log(children);
//     return (
//         <Link to={filter === 'all' ? '' : filter} >
//             <li>
//                 <a href="javascript:;"
//                    onTouchEnd={e => {
//                        e.preventDefault();
//                        if (doAnimate) {
//                            onClickWithFadeInAnimate();
//                        }
//                        else {
//                            onClick();
//                        }
//                    }}
//                    onClick={e => {
//                        e.preventDefault();
//                        if (doAnimate) {
//                            onClickWithFadeInAnimate();
//                        }
//                        else {
//                            onClick();
//                        }
//                    }}
//                 >
//                     {children}
//                 </a>
//             </li>
//         </Link>
//     );
// };
//
// export default MenuLink;