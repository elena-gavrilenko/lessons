import photo from './assets/cats-and-dogs.png';
import email from './assets/icon-email.svg';
import phone from './assets/icon-phone.svg';
import marker from './assets/icon-marker.svg';
import './footer.scss';
export const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-contacts-wrapper'>
          <div className='footer-contacts' id='contacts'>
            <h2 className='footer-title'>Для вопросов и предложений</h2>
            <div className='footer-info'>
              <a className='footer-address' href='mailto:paw&home@mail.ru'>
                <img className='footer-icon' src={email} alt='email' />
                <span>paw&home@mail.ru</span>
              </a>
            </div>
            <div className='footer-info'>
              <a className='footer-address' href='tel:+375(29)674-75-54'>
                <img className='footer-icon' src={phone} alt='phone' />
                +375 (29) 674-75-54
              </a>
            </div>
          </div>
          <div className='footer-contacts'>
            <h2 className='footer-title'>Мы ждем вас по адресу:</h2>
            <div className='footer-info'>
              <a
                className='footer-address'
                href='https://www.google.by/maps/search/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C+220030,+%D0%B3.%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,+%D1%83%D0%BB.%D0%9A.%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+21,+%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5+27,+%D0%BA.%D0%905/@53.8971951,27.5530121,17z/data=!3m1!4b1?entry=ttu'
              >
                <img className='footer-icon' src={marker} alt='map' />
                <p>Минск, ул. К.Маркса, стр. 21, к. 27</p>
              </a>
            </div>
            <div className='footer-info'>
              <a
                className='footer-address'
                href='https://www.google.by/maps/place/%D1%83%D0%BB.+%D0%91%D1%83%D0%B4%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+21%D0%B0,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@53.9605816,27.5429097,17z/data=!3m1!4b1!4m6!3m5!1s0x46dbc5ebca8cc11b:0x6d9fa86072a7ba00!8m2!3d53.9605785!4d27.5454846!16s%2Fg%2F11c896141s?entry=ttu'
              >
                <img className='footer-icon' src={marker} alt='map' />
                <p>Минск, ул. Будславская 21A, к. 32K</p>
              </a>
            </div>
          </div>
        </div>
        <div className='footer-img'>
          <img src={photo} alt='cat-and-dog' />
        </div>
      </div>
    </div>
  );
};
