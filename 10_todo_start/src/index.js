import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoListPage } from './components/pages/TodoListPage';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <TodoListPage />
    {/* </React.StrictMode> */}
  </Provider>

);