import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import App from './App.jsx';

const store = createStore(Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('Root')
);

// const store = createStore(Reducers);
