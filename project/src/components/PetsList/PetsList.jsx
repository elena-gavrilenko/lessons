import { useState, useEffect } from 'react';
import { PetCard } from '../PetCard/PetCard';
import { PetItem } from '../PetItem/PetItem';
import { FilterPets } from '../FilterPets/FilterPets';
import { Loader } from '../UI/loader/Loader';
import {
  CATS_BREEDS_URL,
  DOGS_BREEDS_URL,
  CATS_URL,
  DOGS_URL,
  LIMIT,
  API_KEY1,
  API_KEY2,
} from '../constants/constants';
import { getPagesArray, getPageCount } from '../utils/utils';
import { makeRequest } from '../utils/utils';
import { useSearchParams } from '../../hooks/useSearchParams';
import dogImg from './assets/pldog.jpg';
import catImg from './assets/plcat.jpg';
import './petslist.scss';

export function PetsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pets, setPets] = useState({ type: 'none', items: [] });
  const [totalCount, setTotalCount] = useState();
  const page = Number(searchParams.page);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const listState = searchParams.listState;
    if (listState === undefined) {
      return;
    }

    let page = Number(searchParams.page);
    if (page === undefined) {
      page = 0;
      setSearchParams({ page });
    }

    let sort = searchParams.sort;
    if (searchParams.sort === undefined) {
      sort = '';
      setSearchParams({ sort });
    }

    fetchPets(listState, { sort }, page).then(({ pets, headers }) => {
      setPets(pets);
      setIsLoading(false);
      setTotalCount(headers['pagination-count']);
    });
  }, [searchParams, setSearchParams, isLoading]);

  let pagesArray = getPagesArray(getPageCount(totalCount, LIMIT));
   return (
    <div className="petList" id="petList">
      <h2 className="petList-title">
        Выберите кошку или собаку той породы, которую хотите.
      </h2>
      <div className="petList-images">
        <img
          className="cat"
          src={catImg}
          alt=""
          onClick={() => {
            setIsLoading(true);
            setSearchParams({
              listState: 'cat',
              page: 0,
              sort: '',
            });
          }}
        />
        <img
          className="dog"
          src={dogImg}
          alt=""
          onClick={() => {
            setIsLoading(true);
            setSearchParams({
              listState: 'dog',
              page: 0,
              sort: '',
            });
          }}
        />
      </div>
      {searchParams.listState === undefined ? null : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <FilterPets />
              <div className="petList-content">
                <Pets {...pets} />
              </div>
            </>
          )}
          <div className="petList-pagination">
            {pagesArray.map((p) => (
              <span
                className={`petList-paginationItem${
                  p - 1 === page ? ' petList-paginationItem_current' : ''
                }`}
                key={p - 1}
                onClick={() => {
                  setSearchParams({ page: p - 1 });
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <div className="petList-paginationAdaptive">
            <span
              className="petList-paginationItem"
              onClick={() => {
                setSearchParams({ page: 0 });
              }}
            >
              Go to start
            </span>
            <span
              className="petList-transition"
              onClick={() => {
                if (page > 1) {
                  setSearchParams({
                    page: page - 1,
                  });
                }
              }}
            >
              &lt;
            </span>
            <span className="petList-paginationItem  petList-paginationItem_current">
              {page + 1}
            </span>
            <span
              className="petList-transition"
              onClick={() => {
                if (page < pagesArray.length - 1) {
                  setSearchParams({
                    page: page + 1,
                  });
                }
              }}
            >
              &gt;
            </span>
            <span
              className="petList-paginationItem"
              onClick={() => {
                setSearchParams({ page: pagesArray.length - 1 });
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
    const { data: items, headers } = await makeRequest(url, config);
    return { headers, pets: { type, items, listState } };
  }

  if (listState === 'dog') {
    config.params.api_key = API_KEY2;
    const url = filter.sort === '' ? DOGS_BREEDS_URL : DOGS_URL;
    const { data: items, headers } = await makeRequest(url, config);
    return { headers, pets: { type, items, listState } };
  }
}

function Pets(props) {
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
