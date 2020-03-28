import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import {BookProvider} from './pages/booksapi';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BookProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </BookProvider>
), 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
