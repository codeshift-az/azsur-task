import type { FC } from 'react';

type FlickerImageProps = {
  image: string;
  link: string;
}

const FlickerImage: FC<FlickerImageProps> = ({ image, link }) => {
  return (
    <a href={link}>
      <img src={image} alt="" />
    </a>
  );
};

export default FlickerImage;
