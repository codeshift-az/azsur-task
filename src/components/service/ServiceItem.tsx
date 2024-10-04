import List from '@components/ui/List.tsx';
import type { FC } from 'react';

interface ServiceItemProps {
  image: string;
  title: string;
  description: string[];
  list?: string[];
  isHiddenOnSmall?: boolean;
  isMiddle?: boolean;
}

const ServiceItem: FC<ServiceItemProps> = ({ image, title, description, list, isHiddenOnSmall, isMiddle }) => {
  return (
    <div className={`col-lg-4 col-md-4 col-sm-6 ${isHiddenOnSmall ? 'hidden-sm' : ''} col-xs-12`}>
      <div className={`well-${isMiddle ? 'middle' : 'left'}`}>
        <div className="single-well">
          <a href="#">
            <img src={image} alt={title} />
            <h4 className="sec-head">{title}</h4>
          </a>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {list && (
            <List className={isMiddle ? '' : 'midd-icons'}>
              {list.map((item, index) => (
                <li key={index}>
                  <i className="fa fa-check-circle-o"></i>{item}
                </li>
              ))}
            </List>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
