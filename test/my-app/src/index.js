import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
  {/* strict mode */}
    <Router >
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
