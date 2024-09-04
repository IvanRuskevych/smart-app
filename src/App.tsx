import { Layout } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Layout />
      <ToastContainer />
    </>
  );
};
