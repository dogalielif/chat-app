import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import "./index.css";
import App from "./App";
import { store } from './helpers';
import * as serviceWorker from "./serviceWorker";

//IIFE
(function() {
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {

                    let params = JSON.parse(opts.body);

                        let user = {
                            username:  params.username,
                            password:  params.password
                        }
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                }
            }, 500);
        });
    }
})()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
