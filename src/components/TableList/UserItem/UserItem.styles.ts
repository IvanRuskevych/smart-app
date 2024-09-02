import { css } from '@emotion/css';
import { DEVICE_TYPE } from '../../../hooks/useDeviceType.ts';

export const itemStyle = css`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  align-content: stretch;

  justify-items: start;
  align-items: start;
  padding: 10px;
  width: 100%;
  border: 1px solid grey;
  background-color: var(--background-main);

  @media ${DEVICE_TYPE.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'name email'
      'username phone';
    height: 150px;
  }
`;

export const nameStyle = css`
  @media ${DEVICE_TYPE.tablet} {
    grid-area: name;
  }
`;

export const usernameStyle = css`
  @media ${DEVICE_TYPE.tablet} {
    grid-area: username;
  }
`;

export const emailStyle = css`
  @media ${DEVICE_TYPE.tablet} {
    grid-area: email;
  }
`;

export const phoneStyle = css`
  @media ${DEVICE_TYPE.tablet} {
    grid-area: phone;
  }
`;
