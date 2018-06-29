import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export const configureStore = (preloadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storeEnhacers = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhacers);
    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer,
    );
    return store;
}