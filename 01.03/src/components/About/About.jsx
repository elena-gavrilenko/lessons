import { MyButton } from '../UI/button/MyButton';
// import image from './assets/klipartz.png';
import image from './assets/photo pets.png';
import './about.scss';

export const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <h1 className='about-title'>Where Love Meets Paws</h1>
        <p className='about-text'>
          Adopting a pet is a rewarding experience that brings joy and
          companionship to both humans and animals alike.
        </p>
        <MyButton>Choose a pet</MyButton>
      </div>
      <div className='about-img'>
        <img src={image} alt='' />
        <div className='about-imgShadow'></div>
      </div>
    </div>
  );
};
