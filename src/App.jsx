import { useEffect, useState } from 'react';

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
      <section className="jobs">
        <div className="loading"></div>
      </section>
    );
  }
  return <h2>Tabs Starter</h2>;
};
export default App;
