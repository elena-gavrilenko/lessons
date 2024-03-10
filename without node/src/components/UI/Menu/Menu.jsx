import { Link, useNavigate } from 'react-router-dom';
import './menu.scss';

export const Menu = ({ className, onClick }) => {
   const handleToggle = () => {
    const menuVisible = false;
    onClick(menuVisible);
  };

  const auth = localStorage.auth;
  const navigate = useNavigate();
  return (
    <ul className={className}>
      <li>
        <Link className="menu-link" to="/" onClick={handleToggle}>
          Главная
        </Link>
      </li>
      <li>
        <a className="menu-link" href="#footer" onClick={handleToggle}>
          Контакты
        </a>
      </li>
      <li>
        {!auth ? (
          <Link className="menu-link signIn" to="/login" onClick={handleToggle}>
            Войти
          </Link>
        ) : (
          <button
            className="menu-link signOut"
            onClick={() => {
              localStorage.removeItem('auth');
              navigate('/');
              handleToggle();
            }}
            to="/login"
          >
            Выйти
          </button>
        )}
      </li>
    </ul>
  );
};
