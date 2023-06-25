import { NavLinkStyled } from './ComponentsStyles';

export const FooterSection = () => {
  return (
    <>
      <div className="col-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 text-light">THE GARAGE</h6>
        <div className="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iusto
          explicabo sit nobis ipsa unde magni odio ipsum eaque tempora
          cupiditate asperiores voluptatem delectus atque, esse minus quibusdam
          iure perferendis!
        </div>
      </div>
      <div className="col-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 text-light">¿Qué buscas?</h6>
        <div className="d-flex flex-column">
          <NavLinkStyled to="/productos">Productos</NavLinkStyled>
          <NavLinkStyled to="/servicios">Servicios</NavLinkStyled>
          <NavLinkStyled to="/empresas">Empresas</NavLinkStyled>
        </div>
      </div>
      <div className="col-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 text-light">
          Otros enlaces
        </h6>
        <div className="d-flex flex-column">
          <NavLinkStyled to="/pqr">Preguntas frecuentes</NavLinkStyled>
          <NavLinkStyled to="/acercade">Acerca de nosotros</NavLinkStyled>
          <NavLinkStyled to="/pqr">PQR</NavLinkStyled>
        </div>
      </div>
      <div className="col-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 text-light">Contacto</h6>
        <div className="d-flex flex-column">
          <div className="text-light">Bogotá, Colombia, Cll 16 #21-54</div>
          <div className="text-light">info@thegarage.com</div>
          <div className="text-light">+ 57 310 655 8974</div>
          <div className="text-light">+ 57 310 655 8974</div>
        </div>
      </div>
    </>
  );
};
