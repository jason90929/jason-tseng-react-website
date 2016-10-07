import React, {Component, PropTypes} from 'react';

// 另一種寫法，可以加 Component 的寫法，因為我不知道原本的寫法怎麼加
class Popup extends Component {
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
            <section className="popup-wrapper">
                <div className={'popup' + (this.props.popup ? ' active' : '')}>
                    <a href="javascript:;" onClick={e => {
                        e.preventDefault();
                        this.props.onClick();
                    }}>
                        <span className="icon popup-close"/>
                    </a>
                    <div className="theme-popup">
                        <div className="caption">
                            <p>{this.props.item.detail}</p>
                        </div>

                        <a href={this.props.item.url ? this.props.item.url : 'javascript:;'}
                           target={this.props.item.url ? '_blank' : ''}>
                            <div className="bg-image lazyload" data-src={this.props.item.src}></div>

                            {this.props.item.info}
                        </a>
                    </div>
                </div>
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
    onClick: PropTypes.func.isRequired
};

export default Popup;