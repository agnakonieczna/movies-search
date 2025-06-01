import { Outlet, NavLink } from 'react-router';
import { LogoIcon } from '../common';
import styles from './index.module.scss';
import { PATHS } from '../../constants/paths.ts';
import classNames from 'classnames';

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LogoIcon />
        <nav className={styles.nav}>
          <NavLink
            to={PATHS.HOME}
            className={({ isActive }: { isActive: boolean }) =>
              classNames(styles.link, { [styles.active]: isActive })
            }
          >
            Home
          </NavLink>
          <NavLink
            to={PATHS.FAVOURITES}
            className={({ isActive }: { isActive: boolean }) =>
              classNames(styles.link, { [styles.active]: isActive })
            }
          >
            Favourites
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
