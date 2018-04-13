import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// import './assets/css/default.min.css'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
