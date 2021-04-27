
import SkillTag from '../components/SkillTag'

export default function PortfolioEntry(props) {
    
    return (
        <div className={`col-md-6 mb-4 ${props.show ? '' : 'd-none'}`}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title fw-bold text-center fs-4 my-3">{props.title}</h5>
                    <p className="text-muted text-center fw-bold">{props.company}</p>
                    <p className="card-text text-break text-justify">{props.description}</p>
                    <p className="text-muted">Ferramentas utilizadas</p>
                    {props.skills.map( (skill, idx) => {
                        return (
                            <span>
                                <SkillTag disabled={true} name={skill} key={idx}/>
                            </span>
                        )
                    } )}
                    <br/>
                    <br/>
                    {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-darkblue">Link</a>}
                    {!props.link && <button className="btn btn-darkblue" disabled>Link</button>}
                    <span className="float-end text-muted fw-bold">{props.date}</span>
                </div>
            </div>
        </div>
    )
}