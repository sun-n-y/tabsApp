import { useEffect, useState } from 'react';
import Jobinfo from './Jobinfo';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  //current item

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const data = await reponse.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <Jobinfo jobs={jobs} />
    </section>
  );
};
export default App;
