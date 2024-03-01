import { useState } from 'react';
import { Menu } from '../UI/Menu/Menu';
import { MyBurger } from '../UI/burger/MyBurger';
// import logo from './assets/pngwing.com.png';
import logo from './assets/logo.svg';
import './header.scss';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggle = (menuVisible) => {
    console.log(menuVisible);

    setMenuVisible(menuVisible);
  };
  return (
    <div className='header'>
      <a className='header-logo' href='#petList'>
        <img src={logo} alt='logo' />
      </a>
      {!menuVisible ? (
        <Menu className='menu' />
      ) : (
        <Menu className='menu open' />
      )}

      <MyBurger onClick={handleToggle} />
    </div>
  );
};
