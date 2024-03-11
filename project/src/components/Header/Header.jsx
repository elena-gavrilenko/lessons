import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../UI/Menu/Menu';
import { Burger } from '../UI/burger/Burger';
import logo from './assets/logo.svg';
import './header.scss';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggle = (menuVisible) => {
    const body = document.body.classList;
    setMenuVisible(menuVisible);
    menuVisible ? body.add('bodyNoScroll') : body.remove('bodyNoScroll');
  };
  return (
    <div className='header'>
      <Link className='header-logo' to='/' onClick={() => handleToggle(false)}>
        <img src={logo} alt='logo' />
      </Link>
      {!menuVisible ? (
        <Menu className='menu' onClick={handleToggle} />
      ) : (
        <Menu className='menu open' onClick={handleToggle} />
      )}
      {!menuVisible ? (
        <Burger className='burger' onClick={handleToggle} />
      ) : (
        <Burger className='burger active' onClick={handleToggle} />
      )}
    </div>
  );
};
