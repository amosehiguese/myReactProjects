import React from 'react';
import Review from './Review';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h1>Our Reviews</h1>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
