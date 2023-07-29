import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './menu-components/Navigation';
import Main from './menu-components/Main';
import { Row, Col  } from 'react-bootstrap';

const App = () => {
    return (
        <Router>
            <Row>
                <Col>
                    <Navigation />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Main />
                </Col>
            </Row>
        </Router>
    );
};

export default App;
