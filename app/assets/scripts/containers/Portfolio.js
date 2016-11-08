import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {setPopupIndex, showPopup} from '../actions';
import {Card, CardTitle, CardActions} from 'react-mdl';
import Popup from '../components/Popup';

// 另一種寫法，可以加 Component 的寫法，因為我不知道原本的寫法怎麼加
class Portfolio extends Component {
    componentDidMount() { // HTML 載入完畢後執行
        // Lazy load
        [].forEach.call(document.querySelectorAll('div[data-src]'), function (el) {
            var src = el.getAttribute('data-src');
            var img = document.createElement('img');
            img.setAttribute('src', src);

            el.style.backgroundImage = 'url(' + src + ')';
            img.onload = function () {
                el.removeAttribute('data-src');
            };
        });
    }

    render() {
        return (
            <div>
                <figure className="banner _01">
                </figure>

                <div className="bg-theme-color">
                    <article className="article">
                        <h2>Portfolio</h2>

                        {this.props.data.detail.map(list =>
                            <div className="card-wrapper">
                                <h3>
                                    {list.title}
                                </h3>

                                {
                                    list.method === 'iframe'
                                        ?
                                        list.items.map(item =>
                                            <Card shadow={0}>
                                                <div dangerouslySetInnerHTML={{__html: item.html}}>
                                                </div>
                                            </Card>
                                        )
                                        :
                                        list.items.map((item, index) =>
                                            <Card shadow={0}>
                                                <a href="javascript:;" onClick={e => {
                                                    e.preventDefault();
                                                    this.props.onClick(index);
                                                }}>
                                                    <div className="bg-image lazyload" data-src={item.src}></div>
                                                    <div className="_read-more"><span>{item.info}</span></div>
                                                </a>
                                            </Card>
                                        )
                                }
                            </div>
                        )}
                    </article>

                    <Popup />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.popup
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (index) => {
            dispatch(setPopupIndex(index || 0));
            dispatch(showPopup(true));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio);