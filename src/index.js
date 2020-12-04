import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import store from './store/store'
import { Provider } from 'react-redux'

import './styles/main.css';

//using Reaact Router to set routes
import { BrowserRouter} from 'react-router-dom'
import { Routes } from "./routes"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

//don't forget to do an biuld
// for PWA server

window.addEventListener('load', () => registerSW())

async function registerSW() {
  if('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    }catch (e) {
      console.log('SW registration failed')
    }
  }
}
