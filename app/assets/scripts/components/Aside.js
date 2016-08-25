import React from 'react';
import MenuLink from '../containers/MenuLink';

const Aside = ({content}) => {

    if (content === 'CONTENT') {
        return (
            <aside className="menu has-content fade-in">
                <a href="javascript:;" className="toggle">
                    <i className="fa fa-list"/>
                </a>
                <nav className="main-menu">
                    <a href="javascript:;" className="toggle">
                        <i className="fa fa-close"/>
                    </a>
                    <ul className="bask">
                        <MenuLink filter="HOME">
                            Home
                        </MenuLink>
                        <MenuLink filter="ABOUT">
                            About
                        </MenuLink>
                        <MenuLink filter="SKILLS">
                            Skills
                        </MenuLink>
                        <MenuLink filter="PORTFOLIO">
                            Portfolio
                        </MenuLink>
                        <MenuLink filter="CONTACT">
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
                    <MenuLink filter="HOME">
                        Home
                    </MenuLink>
                    <MenuLink filter="ABOUT">
                        About
                    </MenuLink>
                    <MenuLink filter="SKILLS">
                        Skills
                    </MenuLink>
                    <MenuLink filter="PORTFOLIO">
                        Portfolio
                    </MenuLink>
                    <MenuLink filter="CONTACT">
                        Contact
                    </MenuLink>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;