
import SkillTag from '../components/SkillTag'
import styles from '../styles/PortfolioEntry.module.css'

export default function PortfolioEntry(props) {
    
    return (
        <div className={`col-md-6 mb-4 ${props.show ? '' : 'd-none'} `}>
            <div className={`card shadow ${styles.portfolio_entry}`}>
                <div className="card-body">
                    <h5 className={`card-title fw-bold text-center fs-4 my-3 ${styles.portfolio_entry_title}`}>{props.title}</h5>
                    <p className={`text-muted text-center fw-bold ${styles.portfolio_entry_company}`}>{props.company}</p>
                    <p className={`card-text text-break text-justify ${styles.portfolio_entry_description}`} dangerouslySetInnerHTML={{__html: props.description}}></p>
                    <p className={`text-muted ${styles.portfolio_entry_tools}`} >Ferramentas utilizadas</p>
                    {props.skills.map( (skill, idx) => {
                        return (
                            <span>
                                <SkillTag disabled={true} name={skill} key={idx} applyCSS/>
                            </span>
                        )
                    } )}
                    <br/>
                    <br/>
                    {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer" className={`btn btn-darkblue ${styles.portfolio_entry_link}`}>Link</a>}
                    {!props.link && <button className={`btn btn-darkblue ${styles.portfolio_entry_link}`} disabled>Link</button>}
                    <span className={`float-end text-muted fw-bold ${styles.portfolio_entry_date}`}>{props.date}</span>
                </div>
            </div>
        </div>
    )
}