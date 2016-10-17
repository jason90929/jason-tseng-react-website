import { connect } from 'react-redux';
import { setLanguage, getData } from '../actions';
import Footer from '../components/Footer';

const getContent = (content) => {
    switch (content) {
        case 'about':
        case 'skills':
        case 'portfolio':
            return 'content';
        case 'contact':
            return 'contact';
        default:
            return 'home';
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