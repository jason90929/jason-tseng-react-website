import { connect } from 'react-redux';
import { setPopupContent, showPopup } from '../actions';
import Portfolio from '../components/Portfolio';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.popup
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (item) => {
            dispatch(setPopupContent(item || {}));
            dispatch(showPopup(true));
        }
    };
};

const PortfolioStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio);

export default PortfolioStatus;