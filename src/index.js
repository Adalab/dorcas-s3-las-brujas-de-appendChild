import React from 'react';
import ReactDOM from 'react-dom';
import CardGenerator from './CardGenerator';
import './main.css';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<CardGenerator />, document.getElementById('root'));
registerServiceWorker();
