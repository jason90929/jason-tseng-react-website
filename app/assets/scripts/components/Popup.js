import React, {Component, PropTypes} from 'react';

const keyupFunction = function (e) {
    if (e.keyCode === 37) { // Prev
        e.preventDefault();
        if (this.props.prev) {
            this.props.onSettingPopupIndex(this.props.index - 1);
        }
    }
    else if (e.keyCode === 39) { // Next
        e.preventDefault();
        if (this.props.next) {
            this.props.onSettingPopupIndex(this.props.index + 1);
        }
    }
};

// 另一種寫法，可以加 Component 的寫法，因為我不知道原本的寫法怎麼加
class Popup extends Component {
    componentDidMount() { // HTML 匯入時
        document.onkeyup = keyupFunction.bind(this);
    }
    componentWillUnmount() { // HTML 移除時
        document.onkeyup = null;
    }
    componentDidUpdate() { // 畫面更新完畢後執行
        // Lazy load
        [].forEach.call(document.querySelectorAll('div[data-src]'), function(el) {
            var src = el.getAttribute('data-src');
            var img = document.createElement('img');
            img.setAttribute('src', src);

            el.style.backgroundImage = 'url(' + src + ')';
            img.onload = function() {
                el.removeAttribute('data-src');
            };
        });
    }
    render() {
        return (
            <section className={'popup-wrapper' + (this.props.popup ? ' active' : '')}
            >
                <a href="javascript:;"
                   className={this.props.prev ? '' : 'hide'}

                   onTouchEnd={e => {
                       e.preventDefault();
                       if (this.props.prev) {
                           this.props.onSettingPopupIndex(this.props.index - 1);
                       }
                   }}
                   onClick={e => {
                       e.preventDefault();
                       if (this.props.prev) {
                           this.props.onSettingPopupIndex(this.props.index - 1);
                       }
                   }}>
                    <div className="prevPopup"></div>
                </a>
                <div className="popup">
                    <a href="javascript:;" onClick={e => {
                        e.preventDefault();
                        this.props.onClick();
                    }}>
                        <span className="icon popup-close"/>
                    </a>
                    <div className="theme-popup">
                        <div className="caption">
                            {this.props.item.info}
                        </div>

                        <div className="site-status">
                            {this.props.item.url ?
                                <a href={this.props.item.url}
                                   target="_blank">
                                    {this.props.item.status}
                                </a>
                                :
                                <span>{this.props.item.status}</span>
                            }
                        </div>


                        <div className="bg-image lazyload" data-src={this.props.item.src}></div>

                        <p>{this.props.item.detail}</p>
                    </div>
                </div>
                <a href="javascript:;"
                   className={this.props.next ? '' : 'hide'}
                   onTouchEnd={e => {
                       e.preventDefault();
                       if (this.props.next) {
                           this.props.onSettingPopupIndex(this.props.index + 1);
                       }
                   }}
                   onClick={e => {
                       e.preventDefault();
                       if (this.props.next) {
                           this.props.onSettingPopupIndex(this.props.index + 1);
                       }
                   }}>
                    <div className="nextPopup"></div>
                </a>
                <div className="_backdrop" onClick={e => {
                    e.preventDefault();
                    this.props.onClick();
                }}></div>
            </section>
        );
    }
}

Popup.propTypes = {
    item: PropTypes.object.isRequired,
    popup: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    next: PropTypes.bool.isRequired,
    prev: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onSettingPopupIndex: PropTypes.func.isRequired
};

export default Popup;