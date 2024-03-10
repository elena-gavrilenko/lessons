import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Button } from '../UI/button/Button';
import photo from './assets/siluet-kotika.jpg';
import './petcard.scss';

export const PetCard = ({
  id,
  image: { url } = {
    url: photo,
  },
  name,
  ...otherProps
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="petCard">
      <div className="petCard-imgWrapper ">
        <img className="petCard-img" src={url} alt="pet" />
      </div>
      <h2 className="petCard-title">Порода:</h2>
      <div className="petCard-breed">{name}</div>
      <Button onClick={() => setIsModalVisible(true)}>Узнать больше</Button>
      {isModalVisible ? (
        <Modal
          active={isModalVisible}
          setActive={setIsModalVisible}
          url={url}
          name={name}
          {...otherProps}
        />
      ) : null}
    </div>
  );
};
