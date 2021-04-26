import Image from 'next/image'

export default function Contact(props) {
    return (
        <section className="page-section" id="contact">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase mb-0 fw-bold">{props.title}</h2>

                <div className="divider_list">
                    <div className="divider"></div>
                    <div><i className="fas fa-star"></i></div>
                    <div className="divider"></div>
                </div>

                <div className="row mt-5">
                    
                    <div className="col-md-4 px-4">
                        <ul className="list-group list-group-flush fw-bold fs-5">
                            <li className="list-group-item my-2">
                                <i className="far fa-envelope fs-5"></i>   {props.email}
                            </li>
                            <li className="list-group-item my-2 fs-5">
                                <i className="fas fa-mobile-alt"></i>     {props.cellphone}
                            </li>
                            <li className="list-group-item my-2 fs-5">
                                <i className="fab fa-linkedin"></i>       <a href={props.linkedin}>Linkedin</a> 
                            </li>
                            <li className="list-group-item my-2 fs-5">
                                <i className="fab fa-github"></i>          <a href={props.github}>Github</a> 
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-8">

                        <form method="POST" action="/api/email">
                            <div className="mb-4">
                                <input type="email" className="form-control" name="email" placeholder="Seu email" required/>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control" name="name" placeholder="Seu nome" required/>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control" name="cellphone" placeholder="Seu telefone (Opcional)"></input>
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" name="message" rows="3" placeholder="Sua mensagem" required></textarea>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-lg" type="submit">Enviar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}