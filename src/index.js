import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { MainPage } from './components/pages/AboutPage';
// import { AboutPage } from './components/pages/MainPage';
import { MainPage, SearchUserPage, UserPage, NotFoundPage } from './components/pages';
import './index.css';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/search' element={<SearchUserPage/>}/>
      <Route path='/user/:userId' element={<UserPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
   </BrowserRouter>
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
);


// установка для  routing:
// npm i react-router-dom
// npm i styled-components
