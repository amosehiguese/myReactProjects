import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevIndex = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(people.length - 1);
    }
  };

  const nextIndex = () => {
    if (index >= 0 && index < people.length - 1) {
      setIndex(index + 1);
    } else if (index === people.length - 1) {
      setIndex(0);
    }
  };

  const randomIndex = () => {
    let random = Math.floor(Math.random() * people.length);
    console.log(random);
    if (random === index) {
      random = index + 1;
    }
    if (random > people.length - 1) {
      random = 0;
    }
    setIndex(random);
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={prevIndex}>
          <FaChevronLeft />
        </button>

        <button className='next-btn' onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => randomIndex()}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
