import { Link } from 'react-router-dom';
import './menu.scss';
// import icon from './assets/registration.png';
// import { LoginPage } from '../../../pages';

export const Menu = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <a className='menu-link' href='#petList'>
          Suggests
        </a>
      </li>
      <li>
        <a className='menu-link' href='#help'>
          You can help
        </a>
      </li>
      <li>
        <a className='menu-link' href='#footer'>
          Contacts
        </a>
      </li>
      <li>
        {/* <img className="menu-icon" src={icon} alt="registration" /> */}
        <Link className='menu-link' to='/login'>
          Sign in
        </Link>
      </li>
    </ul>
  );
};
