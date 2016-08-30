import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = (state) => {
    return {
        content: state.content,
        language: state.language,
        animation: state.animation
    }
};

const ContentList = connect(
    mapStateToProps
)(Content);

export default ContentList;