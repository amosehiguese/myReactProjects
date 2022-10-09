import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowMore(!showMore)}>
          {showMore ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{showMore ? info : info.substring(0, 0)}</p>
    </article>
  );
};

export default Question;
