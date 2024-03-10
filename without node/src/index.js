import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  ArrangePage,
  BreedsPage,
  LoginPage,
  MainPage,
  NotFoundPage,
} from './pages';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const RequireAuth = ({ children, redirectTo }) => {
  const auth = localStorage.getItem('auth');
  if (auth == null) {
    localStorage.setItem('prevPath', window.location.pathname);
  }
  return auth == null ? <Navigate to={redirectTo} /> : children;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/breeds" element={<BreedsPage />} />

        <Route
          path="/breeds/:pet/:id"
          element={
            <RequireAuth redirectTo="/login">
              <ArrangePage />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
