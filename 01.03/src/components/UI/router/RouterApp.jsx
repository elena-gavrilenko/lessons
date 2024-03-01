import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage, NotFoundPage, MainPage, ArrangePage } from '../../../pages'
// import { publicRoutes, privateRoutes } from '../../constants/constants';
import './router.scss'
export const RouterApp = () => {
  // const isAuth = false;
  return (
    <div className="router">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />

          <Route
            path="/:pet/:id"
            // path={pathname}
            element={
              <RequireAuth redirectTo="/login">
                <ArrangePage />
              </RequireAuth>
            }
          />

          {/* {isAuth ? (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<MainPage />} />

              <Route path="/:id" element={<ArrangePage />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<MainPage />} />
            </>
          )} */}
          {/* {privateRoutes.map((route) => {
            return <Route path={route.path} element={route.element} />;
          })} */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const RequireAuth = ({ children, redirectTo }) => {
  // const isAuth = getAuth();
  const auth = localStorage.getItem('auth')
  return auth == null ? <Navigate to={redirectTo} /> : children
}
