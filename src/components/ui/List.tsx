import type { FC, ReactNode } from 'react';

type ListProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const List: FC<ListProps> = ({ children, className = '', id = '' }) => {
  return (
    <ul
      id={id}
      className={className}>
      {children}
    </ul>
  );
};

export default List;