'use client';

import { useMedia } from '@/hooks/useMedia';
import { ThemeToggle } from '../../themeToggle';
import Navigation from '../navigation/navigation';
import { Menu } from 'lucide-react';
import { Drawer } from '@mui/material';

import styles from './header.module.scss';
import { useState } from 'react';

const Header = () => {
  const { isMobile } = useMedia();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuButton = (
    <button
      type="button"
      aria-label="Открыть меню"
      className={styles.header__menu_button}
      onClick={() => setIsMobileMenuOpen(true)}
    >
      <Menu />
    </button>
  );

  const handleNavigationItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div>logo</div>
      {!isMobile ? <Navigation onClick={handleNavigationItemClick} /> : null}
      <div className={styles.header__buttons}>
        {isMobile ? mobileMenuButton : null}
        <ThemeToggle />
      </div>
      {isMobileMenuOpen ? (
        <Drawer
          open
          slotProps={{
            paper: { className: styles.header__drawer, sx: { width: '90%' } },
          }}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <Navigation onClick={handleNavigationItemClick} />
        </Drawer>
      ) : null}
    </header>
  );
};

export default Header;
