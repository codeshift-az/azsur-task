import type { FC } from 'react';
import { useState } from 'react';
import AccordionItem from './AccordionItem';

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id="accordion">
      <div className="about-details">
        <div className="panel-group" id="accordion">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
