import { connect } from 'react-redux';
import { setPopupIndex, showPopup } from '../actions';
import Portfolio from '../components/Portfolio';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.popup
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (index) => {
            dispatch(setPopupIndex(index || 0));
            dispatch(showPopup(true));
        }
    };
};

const PortfolioStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio);

export default PortfolioStatus;