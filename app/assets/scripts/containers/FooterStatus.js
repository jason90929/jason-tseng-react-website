import { connect } from 'react-redux';
import { setLanguage, getData } from '../actions';
import Footer from '../components/Footer';

const getContent = (content) => {
    switch (content) {
        case 'HOME':
            return 'HOME';
        case 'CONTACT':
            return 'CONTACT';
        default:
            return 'CONTENT';
    }
};

const mapStateToProps = (state) => {
    return {
        content: getContent(state.content),
        data: state.data.contact,
        language: state.language
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSwitchLanguage: (language) => {
            dispatch(setLanguage(language));
            dispatch(getData(language));
        }
    };
};

const FooterStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FooterStatus;