import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { State } from '../types';
import { reducer } from './reducer';
import { createStore, compose } from 'redux';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const store11 = configureStore({
    reducer,
    devTools: true,
    enhancers: [devToolsEnhancer({})],
    // middleware: getDefaultMiddleware(),
});

const store = createStore(
    reducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
)

export default store;

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;