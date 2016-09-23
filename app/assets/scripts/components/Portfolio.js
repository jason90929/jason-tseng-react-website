import React, {PropTypes} from 'react';
import {Card, CardTitle, CardActions} from 'react-mdl';

const Portfolio = ({data}) => {
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

    return (
        <div>
            <figure className="banner _01">
            </figure>

            <div className="bg-theme-color">
                <article className="article">
                    <h2>Portfolio</h2>

                    {data.detail.map(list =>
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
                                    list.items.map(item =>
                                        <Card shadow={0}>
                                            <a href={item.url ? item.url : 'javascript:;'} target={item.url ? '_blank' : ''}>
                                                <div className="bg-image lazyload" data-src={item.src} ></div>
                                                <CardActions>
                                                    <span className="card-intro">
                                                        {item.info}
                                                    </span>
                                                </CardActions>
                                            </a>
                                        </Card>
                                    )
                            }
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
};

Portfolio.propTypes = {
    data: PropTypes.object.isRequired
};

export default Portfolio;