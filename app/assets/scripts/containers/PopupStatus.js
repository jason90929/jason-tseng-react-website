import { connect } from 'react-redux';
import { setPopupIndex, showPopup } from '../actions';
import Popup from '../components/Popup';

const mapStateToProps = (state) => {
    return {
        popup: state.popup,
        item: state.data.portfolio.detail[1].items[state.popupIndex],
        index: state.popupIndex,
        next: (state.data.portfolio.detail[1].items[state.popupIndex + 1] ? true : false),
        prev: (state.data.portfolio.detail[1].items[state.popupIndex - 1] ? true : false)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(showPopup(false));
        },
        onSettingPopupIndex: (index) => {
            dispatch(setPopupIndex(index || 0));
        }
    };
};

const PopupStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(Popup);

export default PopupStatus;