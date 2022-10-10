import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url);
      const newJobs = await resp.json();
      console.log(jobs);
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h2>loading...</h2>
      </section>
    );
  }
  const { title, company, dates, duties } = jobs[value];

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h3>Experience</h3>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className='job-desc' key={index}>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
