import { connect } from 'react-redux';
import Header from '../components/Header';

const getContent = (content) => {
    switch (content) {
        case 'about':
        case 'skills':
        case 'portfolio':
        case 'contact':
            return 'content';
        default:
            return 'home';
    }
};

const mapStateToProps = (state) => {
    return {
        content: getContent(state.content)
    };
};

const HeaderStatus = connect(
    mapStateToProps
)(Header);

export default HeaderStatus;