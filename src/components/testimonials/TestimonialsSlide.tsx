import type { FC } from 'react';

type TestimonialsSlideProps = {
  image: string,
  text: string,
  name: string,
  role: string
};

const TestimonialSlide: FC<TestimonialsSlideProps> = ({ image, text, name, role }) => (
  <div className="single-testi">
    <div className="testi-img">
      <img src={image} alt={name} />
    </div>
    <div className="testi-text">
      <p>{text}</p>
      <h4>{name}</h4>
      <span className="guest-rev">{role}</span>
    </div>
  </div>
);

export default TestimonialSlide;