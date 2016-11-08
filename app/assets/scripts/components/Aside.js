import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import MenuToggle from '../components/MenuToggle';
import Menu from '../components/Menu';

const Aside = ({content, menu}) => {
    if (content === 'content') {
        return (
            <aside className={'menu has-content fade-in' + (menu ? ' active' : '')}>
                <MenuToggle filter={true}>
                    <i className="fa fa-list"/>
                </MenuToggle>
                <nav className="main-menu">
                    <MenuToggle filter={false}>
                        <i className="fa fa-close"/>
                    </MenuToggle>
                    <ul className="bask">
                        <Menu filter="">
                            Home
                        </Menu>
                        <Menu filter="about">
                            About
                        </Menu>
                        <Menu filter="skills">
                            Skills
                        </Menu>
                        <Menu filter="portfolio">
                            Portfolio
                        </Menu>
                        <Menu filter="contact">
                            Contact
                        </Menu>
                    </ul>
                </nav>
            </aside>
        );
    }

    return (
        <aside className="menu">
            <nav className="main-menu">
                <ul className="bask">
                    <Menu filter="">
                        Home
                    </Menu>
                    <Menu filter="about">
                        About
                    </Menu>
                    <Menu filter="skills">
                        Skills
                    </Menu>
                    <Menu filter="portfolio">
                        Portfolio
                    </Menu>
                    <Menu filter="contact">
                        Contact
                    </Menu>
                </ul>
            </nav>
        </aside>
    );
};

const getContent = (content) => {
    switch (content) {
        case 'about':
        case 'skills':
        case 'portfolio':
        case 'contact':
            return 'content';
        default:
            return 'home';
    }
};

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        content: getContent(state.content)
    };
};

export default connect(
    mapStateToProps
)(Aside);