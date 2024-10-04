import type { FC } from 'react';

type TabContentProps = {
  title: string;
  content: string;
  isActive: boolean;
}

const TabContent: FC<TabContentProps> = ({
                                           title,
                                           content,
                                           isActive,
                                         }) => {

  return (
    <div className={`tab-pane ${isActive ? 'active' : ''}`}>
      <div className="tab-inner">
        <div className="event-content head-team">
          <h5>{title}</h5>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
