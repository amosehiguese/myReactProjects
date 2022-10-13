import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [users, setUsers] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = users.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, users]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span>
            Reviews
          </h2>
        </div>
        <div className='section-center'>
          {users.map((user, userIndex) => {
            const { id, name, image, title, quote } = user;
            let position = 'nextSlide';
            if (userIndex === index) {
              position = 'activeSlide';
            }
            if (
              userIndex === index - 1 ||
              (index === 0 && userIndex === users.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article className={position} key={id}>
                <img className='person-img' src={image} alt={name} />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            );
          })}
          <button className='prev' onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className='next' onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
