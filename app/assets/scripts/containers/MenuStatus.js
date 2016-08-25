import { connect } from 'react-redux';
import { setMenuActive } from '../actions';
import MenuToggle from '../components/MenuToggle';

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

const MenuStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuToggle);

export default MenuStatus;