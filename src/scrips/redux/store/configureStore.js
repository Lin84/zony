import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const enhancer = applyMiddleware(
    logger,
    thunk
);

export default function configureStore(initialState) {
    /* eslint-disable no-underscore-dangle */
    return createStore(
        rootReducer,
        initialState,
        compose(
            enhancer,
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    /* eslint-enable */
}
