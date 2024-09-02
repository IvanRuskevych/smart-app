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
  const { isLaptop, isDesktop } = useDeviceType();
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={'layout'}>
      <header className={'header'}>
        <nav className={'header__nav'}>
          <a className={'header__profile'}>Profile</a>
          <h1 className={'header__title'}>
            JUNIOR FRONTEND DEVELOPER ASSIGNMENT
          </h1>
        </nav>
      </header>
      <main className={'main'}>
        <UsersList users={users} />
        {(isLaptop || isDesktop) && <TableMui rows={users} />}
      </main>
      <footer className={'footer'}>Developer: Ivan Ruskevych</footer>
    </div>
  );
};
