import { css } from '@emotion/css';

import { DEVICE_TYPE } from '../../../hooks/useDeviceType.ts';

export const listContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media ${DEVICE_TYPE.tablet} {
    display: block;
  }
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  max-height: 75vh;

  @media ${DEVICE_TYPE.tablet} {
    overflow-y: hidden;
    max-height: none;
  }
`;

export const swiperContainerStyle = css`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: grid;
    justify-items: center;
    align-items: center;
    height: 200px;
  }
`;
