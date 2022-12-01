import SkillTag from '../components/SkillTag';
import styles from '../styles/PortfolioEntry.module.css';

export default function PortfolioEntry({ job, tools }) {
  return (
    <div className="col-md-6 mb-4">
      <div className={`card shadow ${styles.portfolio_entry}`}>
        <div className="card-body">
          <h5
            className={`card-title fw-bold text-center fs-4 my-3 ${styles.portfolio_entry_title}`}
          >
            {job.title}
          </h5>
          <p
            className={`text-muted text-center fw-bold ${styles.portfolio_entry_company}`}
          >
            {job.company}
          </p>
          <p
            className={`card-text text-break text-justify ${styles.portfolio_entry_description}`}
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></p>
          <p className={`text-muted ${styles.portfolio_entry_tools}`}>
            {tools}
          </p>
          {job.skills.map((skill) => (
            <span key={skill}>
              <SkillTag disabled={true} name={skill} applyCSS />
            </span>
          ))}
          <br />
          <br />
          {job.link && (
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-darkblue ${styles.portfolio_entry_link}`}
            >
              Link
            </a>
          )}
          {!job.link && (
            <button
              className={`btn btn-darkblue ${styles.portfolio_entry_link}`}
              disabled
            >
              Link
            </button>
          )}
          <span
            className={`float-end text-muted fw-bold ${styles.portfolio_entry_date}`}
          >
            {job.date}
          </span>
        </div>
      </div>
    </div>
  );
}
