import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import MenuStatus from '../containers/MenuStatus';
import MenuLink from '../containers/MenuLink';

const Aside = ({content, menu}) => {
    if (content === 'content') {
        return (
            <aside className={'menu has-content fade-in' + (menu ? ' active' : '')}>
                <MenuStatus filter={true}>
                    <i className="fa fa-list"/>
                </MenuStatus>
                <nav className="main-menu">
                    <MenuStatus filter={false}>
                        <i className="fa fa-close"/>
                    </MenuStatus>
                    <ul className="bask">
                        <MenuLink filter="">
                            Home
                        </MenuLink>
                        <MenuLink filter="about">
                            About
                        </MenuLink>
                        <MenuLink filter="skills">
                            Skills
                        </MenuLink>
                        <MenuLink filter="portfolio">
                            Portfolio
                        </MenuLink>
                        <MenuLink filter="contact">
                            Contact
                        </MenuLink>
                    </ul>
                </nav>
            </aside>
        );
    }

    return (
        <aside className="menu">
            <nav className="main-menu">
                <ul className="bask">
                    <MenuLink filter="">
                        Home
                    </MenuLink>
                    <MenuLink filter="about">
                        About
                    </MenuLink>
                    <MenuLink filter="skills">
                        Skills
                    </MenuLink>
                    <MenuLink filter="portfolio">
                        Portfolio
                    </MenuLink>
                    <MenuLink filter="contact">
                        Contact
                    </MenuLink>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;