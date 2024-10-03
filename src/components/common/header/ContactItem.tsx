import type { FC } from 'react';

type ContactItemProps = {
  label: string;
  icon: string;
  className?: string;
};

const ContactItem:FC<ContactItemProps> = ({label, icon, className = ''}) => {
  return (
    <li className={className}>
      <a href="#">
        <i className={icon}></i>
        {label}
      </a>
    </li>
  );
};

export default ContactItem;