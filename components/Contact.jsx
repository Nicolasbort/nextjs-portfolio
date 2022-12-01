import styles from '../styles/Contact.module.css';

export default function Contact(props) {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase mb-0 fw-bold">
          {props.title}
        </h2>

        <div className="divider_list">
          <div className="divider"></div>
          <div>
            <i className="fas fa-star"></i>
          </div>
          <div className="divider"></div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 px-4 mb-4">
            <ul
              className={`list-group list-group-flush fw-bold fs-6 ${styles.contact_info}`}
            >
              <li className="list-group-item my-2">
                <i className="far fa-envelope"></i> {props.email}
              </li>
              <li className="list-group-item my-2">
                <i className="fas fa-mobile-alt"></i> {props.cellphone}
              </li>
              <li className="list-group-item my-2">
                <i className="fab fa-linkedin"></i>{' '}
                <a target="_blank" href={props.linkedin}>
                  Linkedin
                </a>
              </li>
              <li className="list-group-item my-2">
                <i className="fab fa-github"></i>{' '}
                <a target="_blank" href={props.github}>
                  Github
                </a>
              </li>
              <li className="list-group-item my-2">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <a
                  target="_blank"
                  href="https://www.google.com.br/maps/place/Pelotas+-+RS/@-31.5610518,-52.4510239,11z/data=!3m1!4b1!4m5!3m4!1s0x95104876f10dfe49:0x18cd959725e0398b!8m2!3d-31.6169827!4d-52.2762322"
                >
                  {props.location}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-8">
            <form className={styles.contact_form}>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={props.isPortuguese ? 'Seu email' : 'Your email'}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={props.isPortuguese ? 'Seu nome' : 'Your name'}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="cellphone"
                  placeholder={
                    props.isPortuguese
                      ? 'Seu telefone (Opcional)'
                      : 'Your cellphone number (Optional)'
                  }
                ></input>
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  name="message"
                  rows="3"
                  placeholder={
                    props.isPortuguese ? 'Sua mensagem' : 'Your message'
                  }
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  className="btn btn-darkblue btn-lg"
                  type="submit"
                  disabled
                >
                  {props.isPortuguese ? 'Enviar' : 'Submit'}
                </button>
                <span className="text-muted ms-4">Temporarily Disabled</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
