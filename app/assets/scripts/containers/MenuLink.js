import { connect } from 'react-redux';
import { setContent, setAnimate } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.content
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setAnimate(true));

            setTimeout(function() {
                dispatch(setContent(ownProps.filter));
                dispatch(setAnimate(false));
            }, 500);
        }
    };
};

const MenuLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuLink;