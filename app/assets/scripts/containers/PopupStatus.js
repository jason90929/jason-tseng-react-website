import { connect } from 'react-redux';
import { setPopupContent, showPopup } from '../actions';
import Popup from '../components/Popup';

const mapStateToProps = (state) => {
    return {
        popup: state.popup,
        item: state.popupContent
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setPopupContent({}));
            dispatch(showPopup(false));
        }
    };
};

const PopupStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(Popup);

export default PopupStatus;