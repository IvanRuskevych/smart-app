import React from 'react';

import { IUser } from '../../../types';
import {
  emailStyle,
  itemStyle,
  nameStyle,
  phoneStyle,
  usernameStyle,
} from './UserItem.styles.ts';

export const UserItem: React.FC<{ user: IUser }> = ({ user }) => {
  const { name, username, email, phone } = user;

  return (
    <li className={itemStyle}>
      <span className={nameStyle}>Name: {name}</span>
      <span className={usernameStyle}>Lastname: {username}</span>
      <span className={emailStyle}>Email: {email}</span>
      <span className={phoneStyle}>Phone: {phone}</span>
    </li>
  );
};
