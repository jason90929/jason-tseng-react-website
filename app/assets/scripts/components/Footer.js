import React from 'react';
import { Button } from 'react-mdl';

/**
 * @return {boolean}
 * @return {boolean}
 */
const Footer = ({content, data}) => {
    if (content === 'CONTENT') {
        return (
            <footer className="footer has-content">
                <div className="icon-wrapper">
                    <div className="summary">
                        © 2016 <i>Jason Tseng</i>
                    </div>
                </div>

                <div className="banner _02 bot"></div>
            </footer>
        );
    }
    else if (content === 'CONTACT') {
        // do nothing
        return false;
    }

    return (
        <footer className="footer">
            <div className="icon-wrapper">
                {data.map(item =>
                    <a href={item.url} target={item._blank ? '_blank' : ''}>
                        <Button ripple className="mdl-icon-custom">
                            <i className={'fa ' + item.icon}/>
                        </Button>
                    </a>
                )}
            </div>
        </footer>
    );
};

export default Footer;