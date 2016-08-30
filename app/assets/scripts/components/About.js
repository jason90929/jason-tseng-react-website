import React from 'react';

const About = () => (
    <div>
        <figure className="banner _01">
        </figure>

        <div className="bg-theme-color">
            <article className="article">
                <h2>About</h2>

                <figure className="avatar">
                    <img src="assets/images/avatar.jpg" alt="Jason Tseng Avatar"/>
                </figure>

                <p>
                    Hello, I'm <b>Jason Tseng</b>. I have 2 years of experience in Front End Developer based in Taipei, Taiwan. <br />
                </p>

                <h3>Summary</h3>

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
                        Have experience with using framework like AngularJS 1.x, ReactJS
                    </li>
                    <li>
                        Know how to use gulp, browserify, scss, npm development environment, it makes me completing jobs faster
                    </li>
                </ol>

                <h3>
                    Personality
                </h3>

                <p>
                    Hi
                </p>

                <br className="clear" />
            </article>
        </div>
    </div>
);

export default About;