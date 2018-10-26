import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './app/app.reducer';
import sagas from './app/sagas';
import { AppRoutes } from './app/app.routes';
import {
  bodyMiddleware,
  endpointMiddleware,
  paramsMiddleware,
} from './app/middlewares';
import registerServiceWorker from './serviceWorker';

import './index.css';

const rootElement = document.getElementById('root');
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  thunk,
  routerMiddleware(history),
  bodyMiddleware,
  paramsMiddleware,
  endpointMiddleware,
  apiMiddleware,
  sagaMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({ collapsed: true }));
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRoutes />
    </ConnectedRouter>
  </Provider>,
  rootElement
);

registerServiceWorker();
