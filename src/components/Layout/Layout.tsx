import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store.ts';
import { fetchUsers, usersSelector } from '../../redux/users';
import { useDeviceType } from '../../hooks/useDeviceType.ts';
import { TableMui } from '../TableMui/TableMui.tsx';
import { UsersList } from '../TableList/UsersList/UsersList.tsx';
import './Layout.styles.ts';
import {
  footerStyle,
  headerStyle,
  layoutContainer,
  mainStyle,
} from './Layout.styles.ts';

export const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobile, isTablet, isLaptop, isDesktop } = useDeviceType();
  const users = useSelector(usersSelector);

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
        {(isMobile || isTablet) && <UsersList users={users} />}
        {(isLaptop || isDesktop) && <TableMui rows={users} />}
      </main>
      <footer className={footerStyle}>
        © 2024 Developer: Ivan Ruskevych. All rights reserved.
      </footer>
    </div>
  );
};
