import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Landing from './components/Landing/Landing'
import Register from './components/Landing/Register'

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Landing />
        <App />
        <Register />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
