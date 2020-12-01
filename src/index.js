import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//using Reaact Router to set routes
import { BrowserRouter} from 'react-router-dom'
import { Routes } from "./routes"

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

//don't forget to do an biuld
// for PWA server
serviceWorker.register();

