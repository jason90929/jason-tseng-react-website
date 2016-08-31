import React from 'react';
import MenuStatus from '../containers/MenuStatus';
import MenuLink from '../containers/MenuLink';
// import LanguageStatus from '../containers/LanguageStatus';

const Aside = ({content, menu}) => {
    if (content === 'CONTENT') {
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

            {/*<LanguageStatus />*/}
        </aside>
    );
};

export default Aside;