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
      <span className={emailStyle}>
        Email:&nbsp;
        <a href={`mailto:${email}`}>{email}</a>
      </span>
      <span className={phoneStyle}>
        Phone:&nbsp;
        <a href={`tel:${phone}`}>{phone}</a>
      </span>
    </li>
  );
};
