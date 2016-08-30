import { connect } from 'react-redux';
import Language from '../components/Language';

const getContent = (content) => {
    switch (content) {
        case 'HOME':
            return 'HOME';
        default:
            return 'CONTENT';
    }
};

const mapStateToProps = (state) => {
    return {
        content: getContent(state.content),
        language: state.language
    };
};

const LanguageStatus = connect(
    mapStateToProps
)(Language);

export default LanguageStatus;