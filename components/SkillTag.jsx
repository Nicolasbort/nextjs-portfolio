import styles from '../styles/SkillList.module.css'

export default function SkillTag(props) {
    return (
        <button type="button" class={`btn btn-outline-secondary text-dark me-2 ${styles.btn}`} disabled={props.disabled}>{props.name}</button>
    )
}