import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { RootState } from '../../models';
import { rootReducer } from '../reducers';
import { initialRootState } from './initial-state';

let storeEnhancer: StoreEnhancer<RootState>;
const middleware: Middleware[] = [];

middleware.push(thunk);

if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
    storeEnhancer = composeWithDevTools(applyMiddleware(...middleware));
} else {
    storeEnhancer = applyMiddleware(...middleware);
}

export const store = createStore<RootState>(rootReducer, initialRootState, storeEnhancer);
