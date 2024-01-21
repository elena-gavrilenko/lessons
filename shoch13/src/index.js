import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, PageNotFound, TodoListPage } from './pages';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {/* <Route path='/todos' element={<TodoListPage />} /> */}
          <Route path='/todos' element={<PrivateRoute> <TodoListPage /> </PrivateRoute> } />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);