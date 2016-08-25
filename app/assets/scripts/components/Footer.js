import React from 'react';

const Footer = ({content}) => {
    console.log(content);

    if (content === 'CONTENT') {
        return (
            <footer className="footer large">
                <div className="text">
                    By Jason®

                    <i className="fa fa-github" />
                    <i className="fa fa-facebook" />
                    <i className="icon-user" />
                </div>

                <div className="footer-banner"></div>
            </footer>
        );
    }

    return (
        <footer className="footer">
            <div className="text">
                By Jason®

                <i className="fa fa-github" />
                <i className="fa fa-facebook" />
                <i className="icon-user" />
            </div>
        </footer>
    );
};

export default Footer;