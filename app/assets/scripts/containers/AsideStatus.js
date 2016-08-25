import { connect } from 'react-redux';
import Aside from '../components/Aside';

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
        menu: state.menu,
        content: getContent(state.content)
    };
};

const AsideStatus = connect(
    mapStateToProps
)(Aside);

export default AsideStatus;