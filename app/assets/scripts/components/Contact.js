import React from 'react';

const Contact = () => (
    <div>
        <figure className="banner _01">
        </figure>

        <div className="bg-theme-color">
            <article className="article">
                <h2>Contact</h2>

                <nav className="contact-list-wrapper">
                    <ul>
                        <li>
                            <a href="https://www.google.com.tw/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0204976,121.5132003,14z/data=!4m5!3m4!1s0x3442ac6b61dbbd8b:0xbcd1baad5c06a482!8m2!3d25.0329636!4d121.5654268"
                               target="_blank">
                                <i className="fa fa-location-arrow"/>
                                Taiwan, Taipei
                            </a>
                        </li>
                        <li>
                            <a href="tel:+886988300764">
                                <i className="fa fa-phone"/>
                                0988-300764
                            </a>
                        </li>
                        <li>
                            <a href="mailto:tsaistorm@gmail.com">
                                <i className="fa fa-envelope-o"/>
                                tsaistorm@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/jason90929" target="_blank">
                                <i className="fa fa-facebook"/>
                                https://www.facebook.com/jason90929
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/jason90929" target="_blank">
                                <i className="fa fa-github"/>
                                https://github.com/jason90929
                            </a>
                        </li>
                    </ul>
                </nav>
            </article>
        </div>
    </div>
);

export default Contact;