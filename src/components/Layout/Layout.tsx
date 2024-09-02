import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store.ts';
import { fetchUsers, usersSelector } from '../../redux/users';
import { useDeviceType } from '../../hooks/useDeviceType.ts';
import { TableMui } from '../TableMui/TableMui.tsx';
import { UsersList } from '../TableList/UsersList/UsersList.tsx';
import './Layout.scss';

export const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobile, isTablet, isLaptop, isDesktop } = useDeviceType();
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={'layout'}>
      <header className={'header'}>
        <nav className={'header__nav'}>
          <p>JUNIOR FRONTEND DEVELOPER ASSIGNMENT</p>
        </nav>
      </header>
      <main className={'main'}>
        {(isMobile || isTablet) && <UsersList users={users} />}
        {(isLaptop || isDesktop) && <TableMui rows={users} />}
      </main>
      <footer className={'footer'}>
        © 2024 Developer: Ivan Ruskevych. All rights reserved.
      </footer>
    </div>
  );
};
