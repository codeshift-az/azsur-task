import { useEffect, useState, useRef } from 'react';
import Logo from '@components/ui/Logo.tsx';
import MainMenu from '@components/ui/MainMenu.tsx';
import Container from '@components/ui/Container.tsx';
import { useBurgerMenuState } from '@/state/burgerMenuState.ts';
import MobileMenu from '@components/ui/MobileMenu.tsx';

import burgerIcon from '@assets/icons/burger.svg';
import closeIcon from '@assets/icons/close.svg';

import '@styles/meanmenu.min.css';

const HeaderBottom = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<null | HTMLDivElement>(null);

  const isBurgerMenuOpen = useBurgerMenuState((state) => state.isOpen);
  const toggleBurgerMenu = useBurgerMenuState((state) => state.toggle);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const sticky = Number(header?.offsetTop);

      if (window.pageYOffset > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        position: isSticky ? 'fixed' : 'relative',
        width: '100vw',
        zIndex: 1000,
        top: isSticky ? 0 : 'auto',
        backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.8)' : 'white',
        transition: 'background-color 0.5s ease',
      }}
    >
      <div
        style={{
          maxHeight: isBurgerMenuOpen ? '1000px' : '95px',
          overflow: 'hidden',
          transition: '0.5s all',
        }}
        id="sticker"
        className="header-area"
      >
        <Container>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 hidden-xs">
              <Logo />
            </div>
            <div className="col-md-9 col-lg-9 col-sm-9 hidden-xs">
              <MainMenu />
            </div>
          </div>
        </Container>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Logo />
            <button
              className='burger-menu-btn'
              onClick={toggleBurgerMenu}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                width: 'fit-content',
                height: 'fit-content',
              }}
            >
              <img height={isBurgerMenuOpen ? 25 : 38} width={isBurgerMenuOpen ? 25 : 38} alt="burger icon" src={isBurgerMenuOpen ? closeIcon : burgerIcon} />
            </button>
          </div>
        </Container>
        <MobileMenu />
      </div>
    </header>
  );
};

export default HeaderBottom;
