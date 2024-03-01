import { ButtonForm } from '../UI/buttonForm/ButtonForm';
import { MyInput } from '../UI/input/MyInput';
import { useInput } from '../../hooks/useInput';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './arrangeform.scss';

export const ArrangeForm = ({ pet, id }) => {
  const name = useInput('', { isEmpty: true, minLength: 3 });
  const phone = useInput('', { isEmpty: true, phoneError: true });
  const isFormValid =
    typeof name.validity === 'boolean' && typeof phone.validity === 'boolean';
  const [imageUrl, setImageUrl] = useState({});
  useEffect(() => {
    console.log(pet, id);
    if (pet === 'cat') {
      axios
        .get(`https://api.thecatapi.com/v1/images/${id}`)
        .then(({ data }) => {
          setImageUrl(data.url);
        });
    } else {
      axios
        .get(`https://api.thedogapi.com/v1/images/${id}`)
        .then(({ data }) => {
          setImageUrl(data.url);
        });
    }
  }, [pet, id]);
  return (
    <form className="arrangeForm">
      <h2>fill out the form and the breeders will contact you.</h2>
      <img class="arrangeForm-img" src={imageUrl} alt="" />
      <MyInput label="name" type="text" placeholder="Name" {...name} />
      <MyInput
        label="phone"
        type="text"
        placeholder="Number phone"
        {...phone}
      />
      <ButtonForm disabled={!isFormValid} type="submit">
        Contact
      </ButtonForm>
    </form>
  );
};
