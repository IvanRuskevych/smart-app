import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store.ts';
import { fetchUsers, usersSelector } from '../../redux/users';
import { useDeviceType } from '../../hooks/useDeviceType.ts';
import { TableMui } from '../TableMui/TableMui.tsx';
import { UsersList } from '../TableList/UsersList/UsersList.tsx';
import {
  footerStyle,
  headerStyle,
  layoutContainer,
  mainStyle,
  titleTable,
} from './Layout.styles.ts';

export const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useSelector(usersSelector);
  const { isMobile, isTablet, isLaptop, isDesktop } = useDeviceType();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={layoutContainer}>
      <header className={headerStyle}>
        <nav>
          <p>JUNIOR FRONTEND DEVELOPER ASSIGNMENT</p>
        </nav>
      </header>
      <main className={mainStyle}>
        <h1 className={titleTable}> User Management Table</h1>
        {(isMobile || isTablet) && (
          <UsersList users={users} loading={loading} error={error} />
        )}
        {(isLaptop || isDesktop) && (
          <TableMui users={users} loading={loading} error={error} />
        )}
      </main>
      <footer className={footerStyle}>
        © 2024 Developer: Ivan Ruskevych. All rights reserved.
      </footer>
    </div>
  );
};
