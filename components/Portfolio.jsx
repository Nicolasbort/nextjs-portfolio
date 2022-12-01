import Filter from '../components/Filter';
import PortfolioEntry from './PortfolioEntry';
import { useState, useMemo } from 'react';

export default function Portfolio({ jobs, portfolio, filter, tools }) {
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = function (component) {
    const clickedTag = component.target.getAttribute('data-search');
    const idxTag = activeTags.indexOf(clickedTag);

    if (idxTag >= 0) activeTags.splice(idxTag, 1);
    else activeTags.push(clickedTag);

    setActiveTags([...activeTags]);

    toggleActive(component);
  };

  const toggleActive = function (component) {
    if (component.target.classList.contains('tag-active'))
      component.target.classList.remove('tag-active');
    else component.target.classList.add('tag-active');
  };

  const filteredJobs = useMemo(() => {
    if (activeTags.length == 0) return jobs;

    return jobs.filter((job) =>
      job.skills.some((r) => activeTags.indexOf(r) != -1),
    );
  }, [activeTags]);

  console.log(filteredJobs);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-darkblue text-center text-uppercase fw-bold mb-0">
          {portfolio}
        </h2>

        <div className="divider_list">
          <div className="divider"></div>
          <div>
            <i className="fas fa-star"></i>
          </div>
          <div className="divider"></div>
        </div>

        <Filter name={filter} callback={toggleTag} />

        <div className="row justify-content-center">
          {filteredJobs.map((job) => (
            <PortfolioEntry key={job.title} job={job} tools={tools} />
          ))}
        </div>
      </div>
    </section>
  );
}
