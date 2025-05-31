import { Outlet, NavLink } from 'react-router';
import { LogoIcon } from '../common';
import styles from './index.module.scss';

const Layout = () => {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LogoIcon />
        <nav className={styles.nav}>
          <NavLink to={`/`} className={getClassName}>
            Home
          </NavLink>
          <NavLink to={`/favourites`} className={getClassName}>
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
