import { connect } from 'react-redux';
import { setContent, setAnimate, setMenuActive } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.language
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setAnimate(true));
            dispatch(setMenuActive(false));

            setTimeout(function() {
                dispatch(setContent(ownProps.filter));
                dispatch(setAnimate(false));
            }, 800);
        }
    };
};

const MenuLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuLink;