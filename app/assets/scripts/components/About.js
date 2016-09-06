import React, {PropTypes} from 'react';

const About = ({data}) => (
    <div>
        <figure className="banner _01">
        </figure>

        <div className="bg-theme-color">
            <article className="article">
                <h2>About</h2>

                <figure className="avatar">
                    <img src={data.avatar.src} alt={data.avatar.alt} />
                </figure>


                <p dangerouslySetInnerHTML={{__html: data.intro}}>

                </p>

                {data.details.map(item =>
                    <div>
                        <h3>
                            {item.title}
                        </h3>

                        { item.intro ?
                            <p dangerouslySetInnerHTML={{__html: item.intro}}>

                            </p>
                            :
                            false
                        }

                        { item.items ?
                            <ol>
                                {item.items.map(text =>
                                    <li>
                                        {text}
                                    </li>
                                )}
                            </ol>
                            :
                            false
                        }
                    </div>
                )}

                {/*<h3>Summary</h3>

                <ol>
                    <li>
                        More than 2 years experience with HTML5, CSS3 and JavaScript
                    </li>
                    <li>
                        Have experience with RESTful API, such as Facebook, Google
                    </li>
                    <li>
                        Able to complete Responsive Web Design independently
                    </li>
                    <li>
                        Have experience with using framework like AngularJS 1.x, React
                    </li>
                    <li>
                        Know how to use gulp, browserify, scss, npm development environment, it makes me completing
                        jobs faster
                    </li>
                </ol>

                <h3>
                    Personality
                </h3>

                <p>
                    Hi
                </p>

                <h3>
                    Other
                </h3>

                <p>
                    <a href="old/">Old website </a>
                    Made with Angular 1.x
                </p>*/}

                <br className="clear"/>
            </article>
        </div>
    </div>
);

About.propTypes = {
    data: PropTypes.object.isRequired
};

export default About;