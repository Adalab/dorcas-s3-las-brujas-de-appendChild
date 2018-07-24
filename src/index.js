import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';
import registerServiceWorker from './registerServiceWorker';
import fontAwesome from '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();
