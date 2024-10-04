import type { FC } from 'react';

type BrandItemProps = {
  image: string;
  link: string;
}

const BrandsItem: FC<BrandItemProps> = ({ image, link }) => {
  return (
    <div className="single-brand-item">
      <a href={link}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default BrandsItem;
