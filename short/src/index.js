import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));


// const element=<h1>Hello world</h1>
// const element2=React.createElement('h1',null,'hello world')
// console.log(element)
// console.log(element2)

// компилирует babel
//  в фигурных скобках пишутся выражения, перменные или вызов функции

root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
);
