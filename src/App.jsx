import { useEffect, useState } from 'react';
import Jobinfo from './Jobinfo';
import BtnContainer from './BtnContainer';

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
      <BtnContainer jobs={jobs} />
      <Jobinfo jobs={jobs} />
    </section>
  );
};
export default App;
