import { useEffect, useMemo, useState } from 'react';
import { Select } from '../UI/select/Select';
import { API_KEY1, API_KEY2 } from '../constants/constants';
import { makeRequest } from '../utils/utils';
import { useSearchParams } from '../../hooks/useSearchParams';
import './filterpets.scss';

export const FilterPets = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [breedsCats, setBreedsCats] = useState([]);
  const [breedsDogs, setBreedsDogs] = useState([]);

  useEffect(() => {
    makeRequest('https://api.thecatapi.com/v1/breeds', {
      params: { order: 'ASC', api_key: API_KEY1 },
    }).then(({ data }) => {
      setBreedsCats(data);
    });
    makeRequest('https://api.thedogapi.com/v1/breeds', {
      params: { order: 'ASC', api_key: API_KEY2 },
    }).then(({ data }) => {
      setBreedsDogs(data);
    });
  }, []);

  const breeds = useMemo(() => {
    if (breedsCats.length === 0 || breedsDogs.length === 0) {
      return [];
    }
    if (searchParams.listState === 'cat') {
      return breedsCats;
    } else {
      return breedsDogs;
    }
  }, [breedsCats, breedsDogs, searchParams]);

  return (
    <div className="filterPets">
      <Select
        value={searchParams.sort}
        onChange={(selectedSort) => {
          setSearchParams({ sort: selectedSort, page: 0 });
        }}
        defaultValue="All breeds"
        options={breeds.map((el) => {
          return {
            value: el.id,
            name: el.name,
          };
        })}
      />
    </div>
  );
};
