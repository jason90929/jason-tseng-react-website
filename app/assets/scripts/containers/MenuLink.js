import { connect } from 'react-redux';
import { setContent, setAnimate, setMenuActive, setContentStatus } from '../actions';
import Menu from '../components/Menu';

const getContent = (content) => {
    switch (content) {
        case 'HOME':
            return 'HOME';
        default:
            return 'CONTENT';
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
        onClickWithAnimate: () => {
            dispatch(setAnimate(true));
            dispatch(setMenuActive(false));
            dispatch(setContentStatus(getContent(ownProps.filter)));

            setTimeout(function() {
                dispatch(setAnimate(false));
                dispatch(setContent(ownProps.filter));
            }, 800);
        },
        onClick: () => {
            dispatch(setMenuActive(false));
            dispatch(setContentStatus(getContent(ownProps.filter)));
            dispatch(setContent(ownProps.filter));
        }
    };
};

const MenuLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuLink;