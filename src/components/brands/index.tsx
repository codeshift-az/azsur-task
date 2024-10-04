import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@components/ui/Container.tsx';
import BrandsItem from '@components/brands/BrandsItem.tsx';
import { Autoplay } from 'swiper/modules';

import clients1 from '@assets/clints/1.jpg';
import clients2 from '@assets/clints/2.jpg';
import clients3 from '@assets/clints/3.jpg';
import clients4 from '@assets/clints/4.jpg';

import 'swiper/css';

const brands = [
  { image: clients1, link: '#' },
  { image: clients2, link: '#' },
  { image: clients3, link: '#' },
  { image: clients4, link: '#' },
  { image: clients2, link: '#' },
  { image: clients1, link: '#' },
  { image: clients2, link: '#' },
  { image: clients3, link: '#' },
  { image: clients4, link: '#' },
  { image: clients3, link: '#' },
  { image: clients2, link: '#' },
  { image: clients1, link: '#' },
  { image: clients2, link: '#' },
];

const BrandSection = () => {
  return (
    <div className="brand-area area-padding">
      <Container>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="brand-items">
              <Swiper
                spaceBetween={30}
                slidesPerView={6}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {brands.map((brand, index) => (
                  <SwiperSlide key={index}>
                    <BrandsItem image={brand.image} link={brand.link} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandSection;
