import { useState, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Loader } from '../UI/loader/Loader';
import { CATS_URL, DOGS_URL, API_KEY1, API_KEY2 } from '../constants/constants';
import { makeRequest } from '../utils/utils';
import './slider.scss';

export const Slider = () => {
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    makeRequest(CATS_URL, {
      params: { has_breeds: 0, limit: 15, api_key: API_KEY1 },
    }).then(({ data }) => {
      setCats(data);
    });
    makeRequest(DOGS_URL, {
      params: { has_breeds: 0, limit: 15, api_key: API_KEY2 },
    }).then(({ data }) => {
      setDogs(data);
    });
  }, [isLoading]);

  const needs = useMemo(() => {
    setIsLoading(true);
    if (cats.length === 0 || dogs.length === 0) {
      return [];
    }
    return cats
      .filter(({ url, width, height }) => !/.gif$/.test(url) && width > height)
      .reduce((acc, cat, i) => {
        acc.push(cat);
        const dog = dogs[i];
        if (
          dog !== undefined &&
          !/.gif$/.test(dog.url) &&
          dog.width > dog.height
        ) {
          acc.push(dog);
        }
        setIsLoading(false);
        return acc;
      }, []);
  }, [cats, dogs]);

  return (
    <div className="slider">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="slider-swiper"
          >
            {needs.map(({ id, url }) => {
              return (
                <SwiperSlide key={id} url={url}>
                  <img className="slider-img" src={url} alt="pet" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </div>
  );
};
