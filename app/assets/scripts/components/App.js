import React from 'react';
import HeaderStatus from '../containers/HeaderStatus';
import AsideStatus from '../containers/AsideStatus';
import Main from './Main';
import FooterStatus from '../containers/FooterStatus';

const App = () => (
    <div>
        <HeaderStatus />
        <AsideStatus />
        <Main />
        <FooterStatus />
    </div>
);

export default App;