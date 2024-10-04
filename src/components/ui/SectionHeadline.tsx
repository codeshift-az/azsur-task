import type { FC, ReactNode } from 'react';

type SectionHeadlineProps = {
  children: ReactNode;
};

const SectionHeadline: FC<SectionHeadlineProps> = ({ children }) => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="section-headline text-left">
          <h3>{children}</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionHeadline;