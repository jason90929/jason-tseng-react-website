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
                        Have experience with RESTful API, contains Facebook API
                    </li>
                    <li>
                        Able to complete Responsive Web Design independently
                    </li>
                    <li>
                        Have experience with using AngularJS 1.x, ReactJS framework
                    </li>
                    <li>
                        Know how to use gulp, browserify, scss, npm to speed up my develope schedule.
                    </li>
                </ol>

                <h3>
                    Personality
                </h3>

                <p>
                    Hi
                </p>

            </article>
        </div>
    </div>
);

export default About;