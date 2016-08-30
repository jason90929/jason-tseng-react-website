import React from 'react';
import { Card, CardTitle, CardActions } from 'react-mdl';

const Portfolio = () => (
    <div>
        <figure className="banner _01">
        </figure>

        <div className="bg-theme-color">
            <article className="article">
                <h2>Portfolio</h2>

                <div className="card-wrapper">
                    <Card shadow={0}>
                        <a href="javascript:;">
                            <img src="assets/images/portfolio/gopapala.png" alt="Gopapala" />
                            <CardActions>
                                <span className="card-intro">
                                    Gopapala
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="javascript:;">
                            <img src="assets/images/portfolio/ctop.png" alt="ctop" />
                            <CardActions>
                                <span className="card-intro">
                                    ctop
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="javascript:;">
                            <img src="assets/images/portfolio/girlfie.png" alt="Girlfie." />
                            <CardActions>
                                <span className="card-intro">
                                    Girlfie.
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="javascript:;">
                            <img src="assets/images/portfolio/delta-irs-system.png" alt="Delta IRS System" />
                            <CardActions>
                                <span className="card-intro">
                                    Delta IRS System
                                </span>
                            </CardActions>
                        </a>
                    </Card>
                </div>
            </article>
        </div>
    </div>
);

export default Portfolio;