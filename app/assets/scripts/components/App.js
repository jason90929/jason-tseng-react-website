import React from 'react';
import HeaderStatus from '../containers/HeaderStatus';
import AsideStatus from '../containers/AsideStatus';
import Main from './Main';
import Footer from './Footer';

const App = () => (
    <div>
        <HeaderStatus />
        <AsideStatus />
        <Main />
        <Footer />
    </div>
);

export default App;