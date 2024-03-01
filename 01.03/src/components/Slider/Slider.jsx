import { useRef, useState, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { Loader } from '../UI/loader/Loader';
import { CATS_URL, DOGS_URL, API_KEY1, API_KEY2 } from '../constants/constants';
import 'swiper/css';
import './slider.scss';

export const Slider = () => {
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(CATS_URL, {
        params: { has_breeds: 0, limit: 10, api_key: API_KEY1 },
      })
      .then(({ data }) => {
        setCats(data);
      });
    axios
      .get(DOGS_URL, {
        params: { has_breeds: 0, limit: 10, api_key: API_KEY2 },
      })
      .then(({ data }) => {
        setDogs(data);
      });
  }, [isLoading]);

  const swiperRef = useRef();

  const needs = useMemo(() => {
    setIsLoading(true);
    if (cats.length === 0 || dogs.length === 0) {
      return [];
    }

    return cats
      .filter(({ url }) => !/.gif$/.test(url))
      .reduce((acc, cat, i) => {
        acc.push(cat);
        const dog = dogs[i];
        if (dog !== undefined && !/.gif$/.test(dog.url)) {
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
          <span
            className="slider-navigation"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            &lt;
          </span>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}

            // breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {needs.map(({ url }) => {
              return (
                <SwiperSlide key={url}>
                  <img className="img" src={url} alt="pet" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <span
            className="slider-navigation"
            onClick={() => swiperRef.current?.slideNext()}
          >
            &gt;
          </span>
        </>
      )}
    </div>
  );
};
