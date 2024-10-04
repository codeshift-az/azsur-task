import MenuItem from '@components/ui/MenuItem.tsx';
import { useTranslation } from 'react-i18next';
import List from '@components/ui/List.tsx';

const MainMenu = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'pages:home',
  });

  const menuItems = [
    {
      label: t('title'),
      link: 'index-2.html',
      subMenu: [
        { label: 'Homepage Version 1', link: 'index-2.html' },
        { label: 'Homepage Version 2', link: 'index-3.html' },
        { label: 'Homepage Version 3', link: 'index-4.html' },
        { label: 'Homepage Version 4', link: 'index-5.html' },
        { label: 'Homepage Version 5', link: 'index-6.html' },
        { label: 'Homepage Version 6', link: 'index-6.html' },
      ],
    },
    { label: t('about'), link: 'about.html' },
    {
      label: t('projects'),
      link: 'project.html',
      subMenu: [
        { label: 'Single project', link: 'project-2.html' },
        { label: 'project 3 column', link: 'project-1.html' },
        { label: 'project 4 column', link: 'project-3.html' },
      ],
    },
    {
      label: t('services'),
      link: 'services.html',
      subMenu: [
        { label: 'construction', link: 'construction.html' },
        { label: 'Isolation', link: 'isolation.html' },
        { label: 'Painting', link: 'painting.html' },
        { label: 'Electricity', link: 'electrcity.html' },
        { label: 'Building', link: 'building.html' },
        { label: 'Planning', link: 'planning.html' },
      ],
    },
    {
      label: t('blog'),
      link: 'blog.html',
      subMenu: [
        { label: 'blog 1', link: 'Blog-1.html' },
        { label: 'blog 2', link: 'Blog-2.html' },
        { label: 'blog 3', link: 'Blog-3.html' },
        { label: 'blog details', link: 'Blog-details.html' },
      ],
    },
    {
      label: t('contact'),
      link: 'contact.html',
      subMenu: [
        { label: 'contact us', link: 'contact.html' },
        { label: 'contact us 2', link: 'contact-2.html' },
      ],
    },
  ];

  return (
    <div className="mainmenu">
      <nav>
        <List
          id="nav"
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} link={item.link} subMenu={item.subMenu} />
          ))}
        </List>
      </nav>
    </div>
  );
};

export default MainMenu;
