import React from 'react';
import HeaderStatus from '../containers/HeaderStatus';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

const App = () => (
    <div>
        <HeaderStatus />
        <Aside />
        <Main />
        <Footer />
    </div>
);

export default App;