import Filter from '../components/Filter'
import PortfolioEntry from './PortfolioEntry'
import { useState } from 'react'


export default function Portfolio(props) {

    const [jobs, setJobs] = useState(props.jobs);
    const [tagsClicked, setTags] = useState([]);

    function hasSubArray(master, sub) {
        return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
    }

    const searchTag = function() {

        let tempJob = [...jobs]
        jobs.map((job, idx) => { 
            let contains = true
            tempJob[idx].show = hasSubArray(job.skills, tagsClicked) 
        })

        setJobs([...jobs])
    }


    const toggleTag = function(component) {

        let clickedTag = component.target.getAttribute("data-search");
        let idxTag = tagsClicked.indexOf(clickedTag);

        console.log(idxTag)

        if (idxTag >= 0)
            tagsClicked.splice(idxTag, 1);
        else
            tagsClicked.push(clickedTag);

        toggleActive(component)

        setTags([...tagsClicked]);

        console.log(tagsClicked)
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