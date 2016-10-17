import { connect } from 'react-redux';
import Aside from '../components/Aside';

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
        menu: state.menu,
        content: getContent(state.content)
    };
};

const AsideStatus = connect(
    mapStateToProps
)(Aside);

export default AsideStatus;