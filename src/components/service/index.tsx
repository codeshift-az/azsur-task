import React from 'react';
import service1 from '@assets/service/well3.jpg';
import service2 from '@assets/service/well2.jpg';
import service3 from '@assets/service/well1.jpg';
import Container from '@components/ui/Container.tsx';
import ServiceItem from './ServiceItem.tsx';

const services = [
  {
    image: service1,
    title: 'Project start',
    description: [
      'Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure',
      'Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at neque'
    ],
    list: ['Planing', 'Hard work', 'Perfect project'],
    isMiddle: false,
    isHiddenOnSmall: false
  },
  {
    image: service2,
    title: 'Project Maintenance',
    description: [
      'Aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetu.'
    ],
    list: [
      'Interior design Package',
      'Building House',
      'Repairing of Residential Roof',
      'Renovation of Commercial Office',
      'Make Quality Products'
    ],
    isMiddle: true,
    isHiddenOnSmall: false
  },
  {
    image: service3,
    title: 'Complete project',
    description: [
      'Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at neque, architecto debitis laboriosam aliquam inventore quos commodi? Reprehenderit odio culpa beatae! ipsum dolor sit amet, consectetur adipisicing elit.',
      'Culpa obcaecati, debitis beatae tempore, laudantium sint aperiam, dolorem porro quibusdam soluta illo. Iusto totam quaerat et, recusandae deleniti, tempora expedita error!Redug Lagre dolor.'
    ],
    isMiddle: false,
    isHiddenOnSmall: true
  }
];

const ServiceSection: React.FC = () => {
  return (
    <div className="service-area area-padding">
      <Container>
        <div className="row">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              list={service.list}
              isMiddle={service.isMiddle}
              isHiddenOnSmall={service.isHiddenOnSmall}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServiceSection;
