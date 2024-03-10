import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Input } from '../input/Input';
import { ButtonForm } from '../buttonForm/ButtonForm';
import { useInput } from '../../../hooks/useInput';
import cat from './assets/simons_cat.gif';
import './login.scss';

export const Login = () => {
  const navigate = useNavigate();
  const email = useInput('', { isEmpty: true, emailError: true });
  const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 12 });
  const isFormValid =
    typeof email.validity === 'boolean' &&
    typeof password.validity === 'boolean';

  return (
    <div className="login">
      <h1 className="login-title">
        Связаться с заводчиками могут только зарегистрированные пользователи.
      </h1>
      <h2 className="login-subtitle">
        Войдите в свой профиль или зарегистрируйтесь
      </h2>
      <div className="login-content">
        <div className="login-img">
          <img src={cat} alt="cat" />
        </div>
        <form
          className="login-form "
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem('auth', email.value);
            const prevPath = localStorage.getItem('prevPath');
            localStorage.removeItem('prevPath');
            if (prevPath === null) {
              navigate('/');
            } else {
              navigate(prevPath);
            }
          }}
        >
          <Input label="e-mail" type="text" placeholder="e-mail" {...email} />
          <Input
            label="password"
            type="password"
            placeholder="password"
            {...password}
          />
          <ButtonForm disabled={!isFormValid} type="submit">
            Подтвердить
          </ButtonForm>
        </form>
      </div>
      <Link className="login-link" to="/">
        Перейти на главную страницу
      </Link>
    </div>
  );
};
