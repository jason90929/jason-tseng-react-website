import { connect } from 'react-redux';
import Content from '../components/Content';

const getContent = (content) => {
    switch (content) {
        case 'HOME':
            return 'HOME';
        case 'ABOUT':
            return 'ABOUT';
        case 'SKILLS':
            return 'SKILLS';
        case 'PORTFOLIO':
            return 'PORTFOLIO';
        case 'CONTACT':
            return 'CONTACT';
    }
};

const mapStateToProps = (state) => {
    return {
        content: getContent(state.content)
    };
};

const ContentList = connect(
    mapStateToProps
)(Content);

export default ContentList;