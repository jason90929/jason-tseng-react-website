import React from 'react';
import _HeaderDecoration from './_HeaderDecoration';
import HeaderStatus from '../containers/HeaderStatus';
import AsideStatus from '../containers/AsideStatus';
import Main from './Main';
import FooterStatus from '../containers/FooterStatus';


import 'react-mdl/extra/material.js';

const App = () => (
    <div>
        <_HeaderDecoration />
        <HeaderStatus />
        <AsideStatus />
        <Main />
        <FooterStatus />
    </div>
);

export default App;