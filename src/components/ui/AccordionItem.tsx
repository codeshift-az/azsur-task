import type { FC } from 'react';

type AccordionItemProps = {
  title: string;
  content: string;
  isActive: boolean;
  onToggle: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content, isActive, onToggle }) => {
  return (
    <div style={{cursor: 'pointer'}} className="panel panel-default">
      <div className="panel-heading">
        <h4 className="check-title">
          <a
            data-toggle="collapse"
            className={isActive ? 'active' : ''}
            onClick={onToggle}
          >
            <span className="acc-icons"></span>{title}
          </a>
        </h4>
      </div>
      <div className={`panel-collapse collapse ${isActive ? 'in' : ''}`}>
        <div className="panel-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
