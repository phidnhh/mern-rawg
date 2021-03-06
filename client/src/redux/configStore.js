import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import GameReducer from "./reducers/GameReducer";
import AppReducer from "./reducers/AppReducer";

//setup saga
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    GameReducer,
    AppReducer
});

const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export default store;
