import { css } from '@emotion/css';

export const layoutContainer = css`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`;

export const headerStyle = css`
  padding: 1rem;
  background-color: var(--background-primary);
  color: var(--text-secondary);
`;

export const mainStyle = css`
  padding: 1rem;
  max-width: 100vw;
  overflow-x: auto;
`;

export const footerStyle = css`
  padding: 1rem;
  text-align: center;
  background-color: var(--background-primary);
  color: var(--text-secondary);
`;
