import type { FC } from 'react';
import { useState } from 'react';
import TabContent from './TabContent';

type Tab = {
  label: string;
  title: string;
  content: string;
}

type TabsProps = {
  tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="tab-menu">
        <ul className="nav nav-tabs" role="tablist">
          {tabs.map((tab, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a
                href={`#p-view-${index + 1}`}
                role="tab"
                data-toggle="tab"
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            title={tab.title}
            content={tab.content}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
