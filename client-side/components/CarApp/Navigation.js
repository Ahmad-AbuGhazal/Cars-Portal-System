import React from 'react';
import history from '../../core/history';
import Link from '../Link';
import s from './Navigation.css';

function Navigation() {
  const path = history.getCurrentLocation().pathname;
  const linkClass = href => `${s.link}${path === href ? ` ${s.active}` : ''}`;
  return (
    <nav className={s.nav}>
      <Link className={linkClass('/')} to="/">
        About
      </Link>
      <Link className={linkClass('/get-started')} to="/get-started">
        Get Started
      </Link>
      <Link className={linkClass('/404')} to="/404">
        Not Found
      </Link>
    </nav>
  );
}

export default Navigation;
