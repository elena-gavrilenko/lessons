import { useEffect, useMemo, useState } from 'react';
import { MySelect } from '../UI/select/MySelect';
import axios from 'axios';
import { API_KEY1, API_KEY2 } from '../constants/constants';

export const FilterPets = ({ filter, setFilter, listState }) => {
  const [breedsCats, setBreedsCats] = useState([]);
  const [breedsDogs, setBreedsDogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/breeds', {
        params: { order: 'ASC', api_key: API_KEY1 },
      })
      .then(({ data }) => {
        setBreedsCats(data);
        // console.log(data);
      });
    axios
      .get('https://api.thedogapi.com/v1/breeds', {
        params: { order: 'ASC', api_key: API_KEY2 },
      })
      .then(({ data }) => {
        setBreedsDogs(data);
      });
  }, []);

  const breeds = useMemo(() => {
    if (breedsCats.length === 0 || breedsDogs.length === 0) {
      return [];
    }
    console.log(listState);
    if (listState === 'cat') {
      return breedsCats;
    } else {
      return breedsDogs;
    }
  }, [breedsCats, breedsDogs, listState]);

  return (
    <div className="filterPets">
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
        defaultValue="All breeds"
        options={breeds.map(
          (el) =>
            (el = {
              value: el.id,
              name: el.name,
            })
        )}
      />
    </div>
  );
};
