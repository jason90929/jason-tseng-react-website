import React from 'react';

const Footer = ({content}) => {
    if (content === 'CONTENT') {
        return (
            <footer className="footer has-content">
                <div className="icon-wrapper">
                    <div className="summary">
                        © 2016 <i>Jason Tseng</i>
                    </div>
                    {/*<a href="https://www.google.com.tw/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0204976,121.5132003,14z/data=!4m5!3m4!1s0x3442ac6b61dbbd8b:0xbcd1baad5c06a482!8m2!3d25.0329636!4d121.5654268" target="_blank">*/}
                        {/*<i className="fa fa-location-arrow" />*/}
                    {/*</a>*/}
                    {/*<a href="tel:+886988300764">*/}
                        {/*<i className="fa fa-phone" />*/}
                    {/*</a>*/}
                    {/*<a href="mailto:tsaistorm@gmail.com">*/}
                        {/*<i className="fa fa-envelope-o" />*/}
                    {/*</a>*/}
                    {/*<a href="https://www.facebook.com/jason90929" target="_blank">*/}
                        {/*<i className="fa fa-facebook" />*/}
                    {/*</a>*/}
                    {/*<a href="https://github.com/jason90929" target="_blank">*/}
                        {/*<i className="fa fa-github" />*/}
                    {/*</a>*/}
                </div>

                <div className="banner _02"></div>
            </footer>
        );
    }
    // else if (content === 'CONTACT') {
    //     // do something
    // }

    return (
        <footer className="footer">
            <div className="icon-wrapper">
                <a href="https://www.google.com.tw/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0204976,121.5132003,14z/data=!4m5!3m4!1s0x3442ac6b61dbbd8b:0xbcd1baad5c06a482!8m2!3d25.0329636!4d121.5654268" target="_blank">
                    <i className="fa fa-location-arrow" />
                </a>
                <a href="tel:+886988300764">
                    <i className="fa fa-phone" />
                </a>
                <a href="mailto:tsaistorm@gmail.com">
                    <i className="fa fa-envelope-o" />
                </a>
                <a href="https://www.facebook.com/jason90929" target="_blank">
                    <i className="fa fa-facebook" />
                </a>
                <a href="https://github.com/jason90929" target="_blank">
                    <i className="fa fa-github" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;