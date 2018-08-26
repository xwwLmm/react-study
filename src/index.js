import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import iconfont from './styles/iconfont/iconfont.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

console.log(iconfont)
registerServiceWorker();
