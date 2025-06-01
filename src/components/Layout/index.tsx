import { Outlet } from 'react-router';
import { LogoIcon } from '../common';
import styles from './index.module.scss';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LogoIcon />
        <Navigation />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
