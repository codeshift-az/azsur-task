import type { FC } from 'react';

type TagItemProps = {
  tag: string;
}

const TagItem: FC<TagItemProps> = ({ tag }) => {
  return (
    <li>
      <a href="#">{tag}</a>
    </li>
  );
};

export default TagItem;
