/* eslint new-cap: 0 */

import React from 'react';
import { browserHistory, Route } from 'react-router';

import { App } from './app.react';
//import { HomeContainer } from './containers/HomeContainer';
import LoginView from './LoginView.react';
import RegisterView from './RegisterView.react';
//import NotFound from './components/NotFound';

//import { DetermineAuth } from './components/DetermineAuth';
//import { requireAuthentication } from './components/AuthenticatedComponent';
//import { requireNoAuthentication } from './components/notAuthenticatedComponent';


//export default (
//    <Route path='/' component={App}>
////        <Route path='main' component={requireAuthentication(ProtectedView)} />
//        <Route path='login' component={requireNoAuthentication(LoginView)} />
//        <Route path='register' component={requireNoAuthentication(RegisterView)} />
//        <Route path='home' component={requireNoAuthentication(HomeContainer)} />
////        <Route path="*" component={DetermineAuth(NotFound)} />
//    </Route>
//);

export default (
    <Route path='/' component={App}>
        <Route path='login' component={LoginView} />
        <Route path='register' component={RegisterView} />
    </Route>
);
