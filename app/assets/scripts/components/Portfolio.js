import React, {PropTypes} from 'react';
import {Card, CardTitle, CardActions} from 'react-mdl';

const Portfolio = ({data}) => (
    <div>
        <figure className="banner _01">
        </figure>

        <div className="bg-theme-color">
            <article className="article">
                <h2>Portfolio</h2>

                <div className="card-wrapper">
                    {data.map(item =>
                        <Card shadow={0}>
                            <a href="javascript:;">
                                <img src={item.src} alt={item.name}/>
                                <CardActions>
                                    <span className="card-intro">
                                        {item.info}
                                    </span>
                                </CardActions>
                            </a>
                        </Card>
                    )}
                </div>
            </article>
        </div>
    </div>
);

Portfolio.propTypes = {
    data: PropTypes.object.isRequired
};

export default Portfolio;