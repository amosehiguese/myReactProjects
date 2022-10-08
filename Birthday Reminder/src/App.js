import React, { useState } from 'react';
import List from './List';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <article className='container'>
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return <List key={person.id} {...person} />;
        })}
        <button className='button' onClick={() => setPeople([])}>
          Clear All
        </button>
      </article>
    </>
  );
};

export default App;
