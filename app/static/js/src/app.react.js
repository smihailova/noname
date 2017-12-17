//import React from 'react';
//import ReactDOM from 'react-dom';
//import { Provider, connect } from 'react-redux';
//import { browserHistory, Router, Route, Redirect } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';
//
//import NavBar from './NavBar.react';
//import LoginView from './LoginView.react';
//import RegisterView from './RegisterView.react';


//class App extends React.Component {
//  render() {
//    return (
//      <div>
//        <NavBar/>
//        Some content
//      </div>
//    )
//  };
//}

//class App extends React.Component {
//  render() {
//      const currentBrandProperty = App.store.getState().data.brandProperty.currentBrandProperty;
//      const selectedTab = App.store.getState().tab.selectedTab;
//      const redirectPath = `${path}${currentBrandProperty.id}/${selectedTab}/`;
//
//      return (
//          <NavBar/>
//          <Provider store={ App.store } >
//              <Router history={ browserHistory } >
//                  <Route path={`${path}:brandId/log/:integrationId`} component={ IntegrationLog } />
//                  <Redirect from={`${path}(:brandId/)`} to={ redirectPath } />
//                  <Route path={`${path}:brandId/(?campaignId=:campaignId)`} component={ App.getConnectedComponent(BrandPropertySelector) } >
//                      { App.generateRoutes() }
//                      <Redirect from="*" to={ `${currentBrandProperty.id}/manage/`} />
//                  </Route>
//              </Router>
//          </Provider>
//      );
//    }
//}

//class App extends React.Component {
//  render() {
//    return (
//      <NavBar/>
//      <Router history={ browserHistory } >
//        <Route path='login' component={requireNoAuthentication(LoginView)} />
//        <Route path='register' component={requireNoAuthentication(RegisterView)} />
//          <Route path={`${path}:brandId/(?campaignId=:campaignId)`} component={ App.getConnectedComponent(BrandPropertySelector) } >
//              { App.generateRoutes() }
//              <Redirect from="*" to={ `${currentBrandProperty.id}/manage/`} />
//          </Route>
//      </Router>
//    );
//    }
//}
//
//ReactDOM.render(
//  <App />,
//  document.getElementById('content')
//);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, Redirect } from 'react-router';

import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { routeReducer, syncHistory } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import authReducer from './reducers/Auth.reducer';
import { RegisterView } from './RegisterView.react';
import { LoginView } from './LoginView.react';


const reduxRouterMiddleware = syncHistory(browserHistory);


class App extends React.Component {
  render() {
    return (
      <Provider store={ App.store } >
        <Router history={ browserHistory } >
          <Route path={`${path}:brandId/log/:integrationId`} component={ IntegrationLog } />
          <Redirect from={`${path}(:brandId/)`} to={ redirectPath } />
          <Route path={`${path}:brandId/(?campaignId=:campaignId)`} component={ App.getConnectedComponent(BrandPropertySelector) } >
            <Route path='login' component={ LoginView } />
            <Route path='register' component={ RegisterView } />
            <Redirect from="*" to={ `${currentBrandProperty.id}/manage/`} />
          </Route>
        </Router>
      </Provider>


      <Provider store={ App.store }>
        <Router history={ browserHistory }>
          <Redirect from='/' to='register' />
          <Route path='/' component={ App }>
            <Route path='login' component={ LoginView } />
            <Route path='register' component={ RegisterView } />
          </Route>
        </Router>
      </Provider>
    );
  }
}

App.reducer = combineReducers({
    routing: routeReducer,
    auth: authReducer,
});
App.middleware = [
    reduxRouterMiddleware,
    thunkMiddleware
];
App.store = compose(
    applyMiddleware(...App.middleware)
)(createStore)(App.reducer);

reduxRouterMiddleware.listenForReplays(App.store);

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
