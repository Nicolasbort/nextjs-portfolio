
import styles from '../styles/Navbar.module.css'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg text-uppercase fixed-top ${styles.mainNav}`}>
            <div className="container text-white">
                <a className="navbar-brand js-scroll-trigger" href="#header">{props.name}</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">{props.portfolio}</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">{props.about}</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">{props.contact}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}