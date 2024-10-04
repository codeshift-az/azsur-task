import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@components/ui/Container.tsx';
import TestimonialSlide from '@components/testimonials/TestimonialsSlide.tsx';

import author1 from '@assets/clints/author1.jpg';
import author2 from '@assets/clints/author2.jpg';
import author3 from '@assets/clints/author3.jpg';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  {
    image: author1,
    text: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus.',
    name: 'Jhon Forder',
    role: 'Ceo - france Home',
  },
  {
    image: author2,
    text: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus.',
    name: 'Jhon Forder',
    role: 'Executive Officer - smart home',
  },
  {
    image: author3,
    text: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus.',
    name: 'Jhon Forder',
    role: 'Director - builder',
  },
];

const TestimonialsSection = () => {
  return (
    <div className="reviews-area">
      <div className="head-overly"></div>
      <Container>
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <div className="Reviews-content">
              <Swiper
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Autoplay]}
                loop={true}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialSlide
                      image={testimonial.image}
                      text={testimonial.text}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
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

export default TestimonialsSection;
