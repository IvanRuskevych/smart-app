import { css } from '@emotion/css';

import { DEVICE_TYPE } from '../../../hooks/useDeviceType.ts';

export const filterContainer = css`
  margin-bottom: 20px;
`;

export const buttonClear = css`
  margin-left: 10px;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: var(--background-primary);
  color: var(--text-secondary);
  cursor: pointer;
`;

export const filterInput = css`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--background-secondary);
`;

export const listContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;

  @media ${DEVICE_TYPE.tablet} {
    display: block;
  }
`;

export const listStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 10px;
  overflow-y: auto;
  max-height: 75vh;

  /* Hidden scrollbar for WebKit & Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media ${DEVICE_TYPE.tablet} {
    overflow-y: hidden;
    max-height: none;
  }
`;

export const swiperContainer = css`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: grid;
    justify-items: center;
    align-items: start;
    height: 200px;
  }
`;
