import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';
import thunk from 'redux-thunk';
import NewsReducer from './reducers/NewsReducer';
import NewsDetailReducer from './reducers/NewsDetailReducer';

const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    news: NewsReducer,
    newsdetails: NewsDetailReducer
});

const persistConfig = {
    key: 'root',
    storage: storage('anhben'),
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, composeEnhancers(middleware));

export const persistor = persistStore(store)

export default store
