import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import store from './Store.js'
import { Provider } from 'react-redux'
import firebaseConfig from './firebase.config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Provider store={store}>   
    <BrowserRouter>
    <App />
    <ToastContainer></ToastContainer>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
