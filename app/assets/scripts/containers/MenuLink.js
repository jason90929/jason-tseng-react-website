import { connect } from 'react-redux';
import { setContent } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.content
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setContent(ownProps.filter))
        }
    };
};

const MenuLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuLink;