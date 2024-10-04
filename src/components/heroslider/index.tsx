import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import useSWR from 'swr';
import {  slideFetcher } from '@api/slider/sliderApi.ts';
import { SliderRes } from '@/types/SliderRes.ts';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@styles/slider.css';

const HeroSlider = () => {
  const { data, isLoading } = useSWR<SliderRes>('/', slideFetcher);

  if(isLoading) return <div>Loading...</div>;

  return (
    <div className="slider-area">
      <Swiper
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        loop={true} // зацикливание слайдов
        className="mySwiper"
      >
        {data?.results?.map((slide, index) => (
          <SwiperSlide key={index} style={{ position: 'relative' }}>
            <img
              src={slide.image}
              style={{maxHeight: '680px', objectFit: 'cover', width: '100%'}}
              alt={`Slide ${index + 1}`}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              zIndex: 1,
            }}></div>
            <div style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, zIndex: 2 }}
                 className="slider-direction">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="slider-content hidden-xs">
                      <div className="layer-1-1">
                        <h2 className="title1">{slide.title}</h2>
                      </div>
                      <div className="layer-1-2">
                        <h1 className="title2">{slide.description}</h1>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }} className="layer-1-3">
                        <a href="#" className="ready-btn">
                          Our Services
                        </a>
                          <a href="#" className="ready-btn">
                            Get a quote
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
