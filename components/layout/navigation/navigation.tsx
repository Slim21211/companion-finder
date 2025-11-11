'use client';

import Link from 'next/link';
import styles from './navigation.module.scss';
import { navigationItems } from './config';

interface IProps {
  onClick: () => void;
}

const Navigation = ({ onClick }: IProps) => {
  return (
    <nav className={styles.navigation}>
      {navigationItems
        .filter((item) => !item.hidden)
        .map((item) => {
          const isAnchor = item.href.startsWith('#');

          if (isAnchor) {
            return (
              <button
                key={item.id}
                type="button"
                className={styles.navigation__link}
                onClick={() => {
                  onClick?.();
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.title}
              </button>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className={styles.navigation__link}
              onClick={onClick}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
            >
              {item.title}
            </Link>
          );
        })}
    </nav>
  );
};

export default Navigation;
