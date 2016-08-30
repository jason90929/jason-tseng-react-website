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
                                    Gopapala (Private)
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="javascript:;">
                            <img src="assets/images/portfolio/ctop.png" alt="ctop" />
                            <CardActions>
                                <span className="card-intro">
                                    ctop (Private)
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="http://girlfie.com.tw" target="_blank">
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
                                    Delta IRS System (Private)
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="javascript:;">
                            <img src="assets/images/portfolio/my-wedding.png" alt="My Wedding" />
                            <CardActions>
                                <span className="card-intro">
                                    My Wedding (Private)
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="http://www.lotustourstpe.tw/" target="_blank">
                            <img src="assets/images/portfolio/lotustourstpe.png" alt="Lotus Tours Taipei" />
                            <CardActions>
                                <span className="card-intro">
                                    Lotus Tours Taipei
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="http://urstage.net" target="_blank">
                            <img src="assets/images/portfolio/urstage.png" alt="URstage" />
                            <CardActions>
                                <span className="card-intro">
                                    URstage
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="http://203.72.56.75:8088/" target="_blank">
                            <img src="assets/images/portfolio/hua-chiang-high-school.png" alt="Hua Chiang High School Book System" />
                            <CardActions>
                                <span className="card-intro">
                                    Hua Chiang High School Book System
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="https://play.google.com/store/apps/details?id=com.wethink.itaiwan.hotel&hl=zh_TW" target="_blank">
                            <img src="assets/images/portfolio/itaiwanhotel.png" alt="iTaiwan Hotel APP" />
                            <CardActions>
                                <span className="card-intro">
                                    iTaiwan Hotel APP
                                </span>
                            </CardActions>
                        </a>
                    </Card>

                    <Card shadow={0}>
                        <a href="http://www.wethink.com.tw/" target="_blank">
                            <img src="assets/images/portfolio/wethink.png" alt="WeThink Software" />
                            <CardActions>
                                <span className="card-intro">
                                    WeThink Software
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