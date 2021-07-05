import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // 1 ---- importamos el Provider
import {createStore } from 'redux'; // 2 -------- el createStore
import rootReducer from './reducers/reducer.js'

// 3 -- Creamos el Store, y le pasamos el Reducer.
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <Router>
        <App />  
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

