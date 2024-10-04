import useSWR from 'swr';
import { contactFetcher } from '@api/contacts/contactApi.ts';
import List from '@components/ui/List.tsx';
import { Fragment, useMemo } from 'react';
import { Contact } from '@/types/Contact.ts';
import ContactItem from '@components/header/ContactItem.tsx';

const socials = [
  {
    icon: 'fa fa-facebook',
  },
  {
    icon: 'fa fa-twitter',
  },
  {
    icon: 'fa fa-google',
  },
  {
    icon: 'fa fa-skype',
  },
  {
    icon: 'fa fa-pinterest',
  },
];

const HeaderTop = () => {
  const { data, isLoading } = useSWR<Contact>('/information', contactFetcher);

  const contacts = useMemo(() => {
    return [
      {
        label: data?.address || 'loading...',
        icon: 'fa fa-map-marker',
      },
      {
        label: data?.email || 'loading...',
        icon: 'fa fa-envelope',
      },
      {
        label: data?.phone || 'loading...',
        icon: 'fa fa-phone',
        className: 'hidden-sm',
      },
    ];
  }, [data]);

  if (isLoading) {
    return <div>Loading... Please, wait</div>;
  }

  return (
    <div className="topbar-area fix hidden-xs">
      <div className="container">
        <div style={{display: 'flex'}} className="row">
          <div className="col-lg-9 col-md-9 col-sm-8">
            <div className="topbar-left">
              <List>
                {contacts.map((contact) => (
                  <Fragment key={contact.label}>
                    <ContactItem {...contact} />
                  </Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="topbar-right">
              <List>
                {socials.map((social) => (
                  <li key={social.icon}>
                    <a href="#">
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;