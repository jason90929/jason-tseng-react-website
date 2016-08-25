import { connect } from 'react-redux';
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
        content: getContent(state.content)
    };
};

const FooterStatus = connect(
    mapStateToProps
)(Footer);

export default FooterStatus;