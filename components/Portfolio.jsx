import Filter from '../components/Filter'
import PortfolioEntry from './PortfolioEntry'
import { useState } from 'react'


export default function Portfolio(props) {

    const [jobs, setJobs] = useState(props.jobs);
    const [tagsClicked, setTags] = useState([]);

    const searchTag = function() {
        jobs.forEach( (job, idx) => {
            if (tagsClicked.length > 0)
                jobs[idx].show = job.skills.some(r => tagsClicked.indexOf(r) >= 0)
            else
                jobs[idx].show = true
        })

        setJobs([...jobs])
    }

    const toggleTag = function(component) {
        const clickedTag = component.target.getAttribute("data-search");
        const idxTag = tagsClicked.indexOf(clickedTag);

        if (idxTag >= 0)
            tagsClicked.splice(idxTag, 1);
        else
            tagsClicked.push(clickedTag);

        setTags([...tagsClicked]);
        
        toggleActive(component)
        searchTag();
    }

    const toggleActive = function(component) {
        if (component.target.classList.contains("tag-active"))
            component.target.classList.remove("tag-active")
        else
            component.target.classList.add("tag-active")
    }

    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">

                <h2 className="page-section-heading text-darkblue text-center text-uppercase fw-bold mb-0">{props.portfolio}</h2>

                <div className="divider_list">
                    <div className="divider"></div>
                    <div><i className="fas fa-star"></i></div>
                    <div className="divider"></div>
                </div>

                <Filter name={props.filter} callback={toggleTag}/>

                <div className="row justify-content-center">

                    {jobs.map( (job, idx) => {
                        if (job.show) { 
                            return (
                                <PortfolioEntry
                                title={job.title}
                                company={job.company}
                                description={job.description}
                                skills={job.skills}
                                link={job.link}
                                date={job.date}
                                show={job.show}
                                tools={props.tools}
                                key={idx + job.title}
                                />
                            )
                        }
                    })}


                </div>
            </div>
        </section>
    )
}