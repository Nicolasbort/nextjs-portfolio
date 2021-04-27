import styles from '../styles/SkillList.module.css'

export default function SkillTag(props) {
    return (
        <button type="button" onClick={props.callback} data-search={props.name} className={`btn btn-outline-darkblue text-dark me-2 mb-2 ${styles.btn} ${props.applyCSS? styles.skill_tag : ""}`} disabled={props.disabled}>{props.name}</button>
    )
}