import { NavLink, Outlet } from 'react-router-dom';

import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
  const linkClass = ({ isActive }) => clsx(s.link, isActive && s.active_link);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>

        <NavLink className={linkClass} to="/movies" end>
          Find movie
        </NavLink>

        <Outlet />
      </nav>
    </header>
  );
};

export default Navigation;
