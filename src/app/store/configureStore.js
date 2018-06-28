import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';

export const configureStore = (preloadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storeEnhacers = [middlewareEnhancer];

    const composedEnhancer = compose(...storeEnhacers);
    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer,
    );
    return store;
}