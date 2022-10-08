import React from 'react';

const List = (props) => {
  const { image, name, age } = props;
  return (
    <section className='person'>
      <img className='img' src={image} alt='' />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </section>
  );
};

export default List;
