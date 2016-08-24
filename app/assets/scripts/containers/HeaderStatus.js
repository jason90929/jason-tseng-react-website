import { connect } from 'react-redux';
import Header from '../components/Header';

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
        content: getContent(state.content)
    };
};

const HeaderStatus = connect(
    mapStateToProps
)(Header);

export default HeaderStatus;