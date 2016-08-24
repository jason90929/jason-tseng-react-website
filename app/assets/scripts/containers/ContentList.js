import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = (state) => {
    return {
        content: state.content,
        animation: state.animation
    }
};

const ContentList = connect(
    mapStateToProps
)(Content);

export default ContentList;