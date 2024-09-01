import React from 'react';

import './Layout.scss';

export const Layout: React.FC = () => {
  return (
    <div className={'layout'}>
      <header className={'header'}>
        <nav className={'header__nav'}>
          <h1 className={'header__title'}>Test: User table</h1>
          <a className={'header__profile'}>Profile</a>
        </nav>
      </header>
      <main className={'main'}>
        <div>User table component</div> {/* TODO - add component*/}
      </main>
      <footer className={'footer'}>Developer: Ivan Ruskevych</footer>
    </div>
  );
};
