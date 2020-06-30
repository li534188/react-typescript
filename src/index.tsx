import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import {BasicRoute} from './basicRouter'
import {Provider} from 'react-redux'
import rootReducer from './reduces/index'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import rootSaga from './saga/index'
import { StoreState } from './types/index';

const sagaMiddleware = createSagaMiddleware()
let middlewares = []
middlewares.push(sagaMiddleware)
middlewares.push(thunk)
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
// 可以使用异步操作了 这个操作叫泛型 证明 该返回值和输入值都是StoreState
const store = createStoreWithMiddleware<StoreState>(rootReducer);

sagaMiddleware.run(rootSaga)  

ReactDOM.render(
  
    <React.StrictMode>
      <Provider store={store}>
        <BasicRoute />
      </Provider>
    </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
