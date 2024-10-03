import type { FC, ReactNode } from 'react';

type ListProps = {
  children: ReactNode;
  className?: string;
};

const List:FC<ListProps> = ({children, className = ''}) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

export default List;