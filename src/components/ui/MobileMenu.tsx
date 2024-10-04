import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import List from '@components/ui/List.tsx';
import Container from '@components/ui/Container.tsx';

import '@styles/style.css';
import { useBurgerMenuState } from '@/state/burgerMenuState.ts';

const MobileMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation('', {
    keyPrefix: 'pages:home',
  });
  const closeBurgerMenu = useBurgerMenuState((state) => state.close);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // Приведение к HTMLElement

      if (target?.closest('.burger-menu-btn')) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeBurgerMenu(); // Закрываем бургер-меню, если клик был вне его
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeBurgerMenu]);

  return (
    <div ref={menuRef} id='burger-menu' className="mobile-menu-area hidden-lg hidden-md hidden-sm">
      <Container>
        <div className="row">
          <div className="col-md-12">
            <div className="mobile-menu">
              <div className="logo">
                <a href="index-2.html"><img src="img/logo/logo.png" alt="" /></a>
              </div>
              <nav id="dropdown">
                <List>
                  {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleToggle(index)} className={`${openIndex === index ? 'open' : ''}`}>
                      <div style={{ cursor: 'pointer' }}>
                        <a style={{ width: 'fit-content' }} href={item.link}>
                          {item.label}
                        </a>
                        {item.subMenu && (
                          <span className="toggle-icon">
                            {openIndex === index ? '-' : '+'}
                          </span>
                        )}
                      </div>
                      {item.subMenu && openIndex === index && (
                        <List className="sub-menu">
                          {item.subMenu.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <li>
                                <a className="sub-menu-link" href={subItem.link}>{subItem.label}</a>
                              </li>
                            </div>
                          ))}
                        </List>
                      )}
                    </li>
                  ))}
                </List>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileMenu;
