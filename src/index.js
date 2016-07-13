import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { getAuthToken } from './utils/auth';
import { AUTH_USER } from './actions/types';

import App from './components/app';
import Signin from './components/auth/signin';
import Journal from './components/journal_list';
import PageNotFound from './components/not_found';
import reducers from './reducers';
import is_authenticated from './components/is_authenticated';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const user_token = getAuthToken();
// check if logged in
if (user_token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Signin} />
        <Route path="journal" component={is_authenticated(Journal)} />
      </Route>
      <Route path="*" component={PageNotFound} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
