import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import history from './services/router.service';

ReactDOM.render(
    <Provider {...{store}}>
      <ConnectedRouter {...{history}} >
        <App />
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
