import { connect } from 'react-redux';
import { setLanguage, getData } from '../actions';
import LanguageButton from '../components/LanguageButton';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.content
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setLanguage(ownProps.filter));
            dispatch(getData(ownProps.filter));
        }
    };
};

const LanguageLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageButton);

export default LanguageLink;