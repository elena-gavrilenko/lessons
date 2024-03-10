import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonForm } from '../UI/buttonForm/ButtonForm';
import { Input } from '../UI/input/Input';
import { useInput } from '../../hooks/useInput';
import { makeRequest } from '../utils/utils';
import './arrangeform.scss';

export const ArrangeForm = ({ pet, id }) => {
  const name = useInput('', { isEmpty: true, minLength: 3 });
  const phone = useInput('', { isEmpty: true, phoneError: true });
  const isFormValid =
    typeof name.validity === 'boolean' && typeof phone.validity === 'boolean';
  const [imageUrl, setImageUrl] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (pet === 'cat') {
      makeRequest(`https://api.thecatapi.com/v1/images/${id}`).then(
        ({ data }) => {
          setImageUrl(data.url);
        }
      );
    } else {
      makeRequest(`https://api.thedogapi.com/v1/images/${id}`).then(
        ({ data }) => {
          setImageUrl(data.url);
        }
      );
    }
  }, [pet, id]);
  return (
    <div className="arrangeForm">
      <h2 className="arrangeForm-title">
        Заполните форму и заводчики свяжутся с вами.
      </h2>
      <div className="arrangeForm-content">
        <img className="arrangeForm-img" src={imageUrl} alt="pet" />
        <form
          className="arrangeForm-form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <Input label="name" type="text" placeholder="Name" {...name} />
          <Input
            label="phone"
            type="text"
            placeholder="Number phone"
            {...phone}
          />
          <ButtonForm disabled={!isFormValid} type="submit">
            Связаться
          </ButtonForm>
        </form>
      </div>
    </div>
  );
};
