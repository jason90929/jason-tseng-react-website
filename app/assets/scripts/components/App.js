import React from 'react';
import _HeaderDecoration from './_HeaderDecoration';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from './Main';
import Footer from '../components/Footer';


import 'react-mdl/extra/material.js';

const App = () => (
    <div>
        <_HeaderDecoration />
        <Header />
        <Aside />
        <Main />
        <Footer />
    </div>
);

export default App;