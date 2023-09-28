import { ToastContainer } from 'react-toastify';
import { Form } from './Form';
import { Items } from './Items';

export const App = () => {
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items />
    </section>
  );
};
