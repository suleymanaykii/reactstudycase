import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './menu-components/Navigation';
import Main from './menu-components/Main';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Main />
        </Router>
    );
};

export default App;
