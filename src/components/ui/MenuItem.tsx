import { FC } from 'react';

type MenuItemProps = {
  label: string;
  link: string;
  subMenu?: { label: string; link: string }[];
};

const MenuItem: FC<MenuItemProps> = ({ label, link, subMenu }) => {
  return (
    <li>
      <a href={link}>{label}</a>
      {subMenu && (
        <ul className="sub-menu">
          {subMenu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
