import { Link } from 'react-router-dom';
import { Button } from '../UI/button/Button';
import image from './assets/photo pets.png';
import './about.scss';

export const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">Где любовь встречается с лапами</h1>
        <p className="about-text">
          Приобретение домашнего животного – это полезный опыт, который приносит
          радость и дружелюбие как к людям, так и к животным.
        </p>
        <Link to={'/breeds'}>
          <Button>Выбрать питомца</Button>
        </Link>
      </div>
      <div className="about-img">
        <img src={image} alt="" />
        <div className="about-imgShadow"></div>
      </div>
    </div>
  );
};
