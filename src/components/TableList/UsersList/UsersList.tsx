import React, { ChangeEvent, useState } from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IUser } from '../../../types';
import { useDeviceType } from '../../../hooks/useDeviceType.ts';
import { UserItem } from '../UserItem/UserItem.tsx';
import {
  filterContainer,
  filterInput,
  listContainer,
  listStyle,
  swiperContainer,
} from './UserList.styles.ts';

interface UsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const { isMobile, isTablet } = useDeviceType();
  const [searchFilter, setSearchFilter] = useState('');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  const filteredUsers = users.filter(item => {
    const searchString = `${item.name} ${item.username} ${item.email} ${item.phone}`;
    return searchString.toLowerCase().includes(searchFilter.toLowerCase());
  });

  return (
    <>
      {(isMobile || isTablet) && (
        <div className={filterContainer}>
          <input
            type="text"
            value={searchFilter}
            onChange={handleFilterChange}
            placeholder="Search users..."
            className={filterInput}
          />
        </div>
      )}

      <div className={listContainer}>
        {isMobile && (
          <ul className={listStyle}>
            {filteredUsers.map(item => (
              <UserItem key={item.id} user={item} />
            ))}
          </ul>
        )}

        {isTablet && (
          <Swiper
            className={swiperContainer}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {filteredUsers.map(item => (
              <SwiperSlide key={item.id}>
                <UserItem user={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};
