const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentItem(index)}
            className={currentItem === index ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
