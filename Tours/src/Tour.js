import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, rmvTour }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };
  return (
    <section key={id} className='single-tour'>
      <img src={image} alt='' />
      <div className='special'>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={toggleReadMore}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
      <footer>
        <button className='delete-btn' onClick={() => rmvTour(id)}>
          Not Interested
        </button>
      </footer>
    </section>
  );
};

export default Tour;
