import React from 'react';
import MenuLink from '../containers/MenuLink';

const Aside = () => (
    <aside className="menu">
        <nav className="main-menu">
            <ul className="bask">
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

export default Aside;