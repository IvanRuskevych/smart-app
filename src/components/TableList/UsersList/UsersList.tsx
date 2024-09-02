import React from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IUser } from '../../../types';
import { useDeviceType } from '../../../hooks/useDeviceType.ts';
import { UserItem } from '../UserItem/UserItem.tsx';
import {
  listContainer,
  listStyle,
  swiperContainerStyle,
} from './UserList.styles.ts';

interface UsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const { isMobile, isTablet } = useDeviceType();

  return (
    <div className={listContainer}>
      {isMobile && (
        <ul className={listStyle}>
          {users.map(item => (
            <UserItem key={item.id} user={item} />
          ))}
        </ul>
      )}

      {isTablet && (
        <Swiper
          className={swiperContainerStyle}
          spaceBetween={10}
          slidesPerView={'auto'}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {users.map(item => (
            <SwiperSlide key={item.id}>
              <UserItem user={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
