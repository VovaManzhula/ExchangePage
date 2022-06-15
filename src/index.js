import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import { reducer } from './reducer/reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <App />
 </Provider>
);


