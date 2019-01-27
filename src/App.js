import React from 'react';
import { Router, Route } from 'react-router-dom';

import './App.scss';
import { history } from './helpers';
import { LoginPage } from './pages';

class App extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={history}>
                            <div>
                                <Route path="/" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App; 