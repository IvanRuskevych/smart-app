import * as React from 'react';
import { ClipLoader } from 'react-spinners';

import { loaderStyle } from './Loader.style.ts';

interface LoaderProps {
  loading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={loaderStyle}>
      <ClipLoader color="blue" loading={loading} size={50} />
    </div>
  );
};
