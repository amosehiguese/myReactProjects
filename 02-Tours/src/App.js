import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTours = async () => {
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      console.log(tours);
      setTours(tours);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  };

  const rmvTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    return setTours(newTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Tours tours={tours} rmvTour={rmvTour} />
    </main>
  );
}

export default App;
