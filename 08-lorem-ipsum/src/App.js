import React, { useState } from 'react';
import data from './data';

function App() {
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newAmount = parseInt(amount);
    if (newAmount > 0 && newAmount <= data.length) {
      setContent(data.slice(0, newAmount));
    } else {
      setContent(data.slice(0, 1));
    }
  };

  return (
    <>
      <section className='section-center'>
        <h3>want some dummy text? </h3>
        <form onSubmit={handleSubmit} className='lorem-form'>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min='0'
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
        <article className='result'>
          {content.map((content, index) => {
            return <p key={index}>{content}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
