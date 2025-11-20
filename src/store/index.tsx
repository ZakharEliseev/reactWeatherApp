import { applyMiddleware, createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { reducer } from './reducers/weatherState';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(promise, thunk)));
