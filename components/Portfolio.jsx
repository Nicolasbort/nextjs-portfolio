
import Jobs from '../lib/Portfolio'
import SkillTag from '../components/SkillTag'
import Filter from '../components/Filter'


export default function Portfolio(props) {
    return (
        <section className="page-section portfolio" id="portfolio">
                <div className="container">

                    <h2 className="page-section-heading text-darkblue text-center text-uppercase fw-bold mb-0">{props.portfolio}</h2>

                    <div className="divider_list">
                        <div className="divider"></div>
                        <div><i className="fas fa-star"></i></div>
                        <div className="divider"></div>
                    </div>

                    {/* Not using */}
                    {/* <Filter name={props.filter}/> */}

                    <div className="row justify-content-center">

                        {Jobs.pt.map( job => {
                            return (
                                <div className="col-md-6 mb-4" key={job.title}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold text-center fs-4 my-3">{job.title}</h5>
                                            <p className="text-muted text-center fw-bold">{job.company}</p>
                                            <p className="card-text text-break text-justify">{job.description}</p>
                                            <p className="text-muted">Ferramentas utilizadas</p>
                                            {job.skills.map( skill => {
                                                return (
                                                    <span>
                                                        <SkillTag disabled={true} name={skill}/>
                                                    </span>
                                                )
                                            } )}
                                            <br/>
                                            <br/>
                                            {job.link && <a href={job.link} target="_blank" rel="noopener noreferrer" className="btn btn-darkblue">Link</a>}
                                            {!job.link && <button className="btn btn-darkblue" disabled>Link</button>}
                                            <span className="float-end text-muted fw-bold">{job.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
    )
}