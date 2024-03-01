import { PetItem } from '../PetItem/PetItem';
import { PetCard } from '../PetCard/PetCard';

import {
  CATS_BREEDS_URL,
  DOGS_BREEDS_URL,
  CATS_URL,
  DOGS_URL,
  LIMIT,
  API_KEY1,
  API_KEY2,
} from '../constants/constants';
import catImg from './assets/plcat.jpg';
import dogImg from './assets/pldog.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getPagesArray, getPageCount } from '../utils/utils';
import './petslist.scss';
// import { Loader } from '../UI/loader/Loader';
import { FilterPets } from '../FilterPets/FilterPets';

export function PetsList() {
  const [pets, setPets] = useState({ type: 'none', items: [] });
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [listState, setListState] = useState('hidden');
  const [filter, setFilter] = useState({ sort: '' });

  useEffect(() => {
    if (listState === 'hidden') {
      return;
    }

    fetchPets(listState, filter, page).then(({ pets, headers }) => {
      setPets(pets);
      setTotalCount(headers['pagination-count']);
    });
  }, [listState, filter, page]);

  let pagesArray = getPagesArray(getPageCount(totalCount, LIMIT));

  return (
    <div className="petList" id="petList">
      <h2 className="petList-title">
        Choose a cat or dog of the breed you want
      </h2>
      <div className="petList-images">
        <img
          className="cat"
          src={catImg}
          alt=""
          onClick={() => {
            // console.log(page);
            setListState('cat');
            setPage(0);
            setFilter({ sort: '' });
          }}
        />
        <img
          className="dog"
          src={dogImg}
          alt=""
          onClick={() => {
            setListState('dog');
            setFilter({ sort: '' });
            setPage(0);
          }}
        />
      </div>
      {listState === 'hidden' ? null : (
        <>
          <FilterPets
            filter={filter}
            setFilter={setFilter}
            listState={listState}
          />
          <div className="petList-content">
            <Pets {...pets} />
          </div>
          <div className="pagination">
            {pagesArray.map((p) => (
              <span
                className={`paginationItem${
                  p - 1 === page ? ' paginationItem_current' : ''
                }`}
                key={p - 1}
                onClick={() => {
                  setPage(p - 1);
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <div className="paginationAdaptive">
            <span
              className="paginationItem"
              onClick={() => {
                console.log(typeof page);
                setPage(0);
              }}
            >
              Go to start
            </span>
            <span
              className="transition"
              onClick={() => {
                page > 1 ? setPage(page - 1) : setPage(page);
              }}
            >
              &lt;
            </span>
            <span className="paginationItem paginationItem_current">
              {page + 1}
            </span>
            <span
              className="transition"
              onClick={() => {
                console.log(page);
                page < pagesArray.length - 1
                  ? setPage(page + 1)
                  : setPage(page);
              }}
            >
              &gt;
            </span>
            <span
              className="paginationItem"
              onClick={() => {
                setPage(pagesArray.length - 1);
              }}
            >
              Go to end
            </span>
          </div>
        </>
      )}
    </div>
  );
}

const CardType = {
  PET_CARD: 'petCard',
  PET_ITEM: 'petItem',
};

async function fetchPets(listState, filter, page) {
  const type = filter.sort === '' ? CardType.PET_CARD : CardType.PET_ITEM;
  const config = {
    params: {
      limit: LIMIT,
      page,
      order: 'ASC',
    },
  };

  if (filter.sort !== '') {
    config.params.breed_ids = filter.sort;
  }

  if (listState === 'cat') {
    config.params.api_key = API_KEY1;
    const url = filter.sort === '' ? CATS_BREEDS_URL : CATS_URL;

    const { data: items, headers } = await axios.get(url, config);
    return { headers, pets: { type, items, listState } };
  }

  if (listState === 'dog') {
    config.params.api_key = API_KEY2;
    const url = filter.sort === '' ? DOGS_BREEDS_URL : DOGS_URL;

    const { data: items, headers } = await axios.get(url, config);

    return { headers, pets: { type, items, listState } };
  }
}

function Pets(props) {
  console.log(props);
  if (props.type === CardType.PET_CARD) {
    return props.items.map(({ id, ...otherProps }) => {
      return <PetCard key={id} {...otherProps} />;
    });
  }

  if (props.type === CardType.PET_ITEM) {
    return props.items.map(({ id, ...otherProps }) => {
      return <PetItem key={id} id={id} {...otherProps} pet={props.listState} />;
    });
  }

  return null;
}
