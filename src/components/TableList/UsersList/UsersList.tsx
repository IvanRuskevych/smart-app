import React, { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IUserState } from '../../../types';
import { useDeviceType } from '../../../hooks/useDeviceType.ts';
import { UserItem } from '../UserItem/UserItem.tsx';
import { Loader } from '../../Loader/Loader.tsx';
import {
  buttonClear,
  filterContainer,
  filterInput,
  listContainer,
  listStyle,
  swiperContainer,
} from './UserList.styles.ts';

export const UsersList: React.FC<IUserState> = ({ users, loading, error }) => {
  const { isMobile, isTablet } = useDeviceType();
  const [searchFilter, setSearchFilter] = useState('');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  const filteredUsers = users.filter(item => {
    const searchString = `${item.name} ${item.username} ${item.email} ${item.phone}`;
    return searchString.toLowerCase().includes(searchFilter.toLowerCase());
  });

  useEffect(() => {
    if (!!searchFilter && filteredUsers.length === 0) {
      toast.warning(`No users match this filter: ${searchFilter}`);
    }
  }, [searchFilter]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const handleClearField = () => {
    setSearchFilter('');
  };

  return (
    <>
      {loading && <Loader loading={loading} />}

      {(isMobile || isTablet) && (
        <div className={filterContainer}>
          <input
            type="text"
            value={searchFilter}
            onChange={handleFilterChange}
            placeholder="Search users..."
            className={filterInput}
          />
          <button
            type={'button'}
            onClick={handleClearField}
            className={buttonClear}
          >
            Clear
          </button>
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
