export const FooterComponent = () => {
  return (
    <div className="text-center text-lg-start bg-dark text-muted pt-1 mt-5">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                <i className="fas fa-gem me-3"></i>THE GARAGE
              </h6>
              <p className="text-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                iusto explicabo sit nobis ipsa unde magni odio ipsum eaque
                tempora cupiditate asperiores voluptatem delectus atque, esse
                minus quibusdam iure perferendis!
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                ¿Qué buscas?
              </h6>
              <p className="text-light">
                <a href="#!" className="text-reset">
                  Productos
                </a>
              </p>
              <p className="text-light">
                <a href="#!" className="text-reset">
                  Servicios
                </a>
              </p>
              <p className="text-light">
                <a href="#!" className="text-reset">
                  Empresas
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                Otros enlaces
              </h6>
              <p className="text-light">
                <a href="#!" className="text-reset">
                  Preguntas frecuentes
                </a>
              </p>
              <p className="text-light">
                <a href="#!" className="text-reset">
                  Acerca de nosotros
                </a>
              </p>
              <p className="text-light">
                <a href="#!" className="text-reset">
                  PQR
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                Contacto
              </h6>
              <p className="text-light">
                <i className="fas fa-home me-3"></i> Bogotá, Colombia, Cll 16
                #21-54
              </p>
              <p className="text-light">
                <i className="fas fa-envelope me-3"></i>
                info@thegarage.com
              </p>
              <p className="text-light">
                <i className="fas fa-phone me-3"></i> + 57 310 655 8974
              </p>
              <p className="text-light">
                <i className="fas fa-print me-3"></i> + 57 310 655 8974
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4 bg-dark text-secondary">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#">
          thegarage.com
        </a>
      </div>
    </div>
  );
};
