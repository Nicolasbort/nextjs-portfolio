
import styles from '../styles/Navbar.module.css'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg text-uppercase fixed-top ${styles.mainNav}`}>
            <div className="container text-white">
                <a className={`navbar-brand js-scroll-trigger ${styles.a_hover}`} href="#header">{props.name}</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-light text-dark rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${styles.a_hover}`} href="#portfolio">{props.portfolio}</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${styles.a_hover}`} href="#about">{props.about}</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${styles.a_hover}`} href="#contact">{props.contact}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}