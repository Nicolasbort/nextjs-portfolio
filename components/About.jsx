import styles from '../styles/About.module.css'

export default function About(props) {
    return (
        <section className="page-section bg-orange text-white mb-0" id="about" >
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase fw-bold mb-0">{props.title}</h2>

                <div className="divider_list">
                    <div className="divider light"></div>
                    <div><i className="fas fa-star"></i></div>
                    <div className="divider light"></div>
                </div>
                    

                <div className="row justify-content-center">
                    <div className="col-md-8 mx-auto text-justify">
                        <p className={`lead fw-bold ${styles.about_text}`}>{props.about}</p>
                    </div>
                    {/* <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div> */}
                </div>

            </div>
        </section>
    );
}