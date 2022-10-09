import React, { useState } from 'react';
import Tour from './Tour';

const Tours = ({ tours, rmvTour }) => {
  return (
    <>
      <h2 className='title'>Our Tours</h2>
      <hr className='underline' />
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} rmvTour={rmvTour} />;
      })}
    </>
  );
};

export default Tours;
