import React from 'react';
import MenuLink from '../containers/MenuLink';

const Aside = ({content, onClick}) => {
    var headerClassName = '';

    if (content === 'CONTENT') {
        headerClassName = 'has-content fade-in';
    }

    return (
        <aside className={'menu ' + headerClassName}>
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