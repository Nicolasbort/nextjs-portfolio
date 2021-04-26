import Jobs from '../lib/Portfolio'


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
                    
                    <div className="row justify-content-center">

                        {Jobs.pt.map( job => {
                            return (
                                <div className="col-md-6" key={job.title}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold text-center fs-4 my-3">{job.title}</h5>
                                            <p className="card-text text-break text-justify">{job.description}</p>
                                            <a href="#" className="btn btn-primary">Link</a>
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