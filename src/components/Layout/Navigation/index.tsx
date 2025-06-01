import { NavLink } from 'react-router';
import { PATHS } from '../../../constants/paths.ts';
import classNames from 'classnames';
import styles from './index.module.scss';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
