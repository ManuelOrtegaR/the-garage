import { NavLinkStyled } from './ComponentsStyles';

export const FooterSection = () => {
  return (
    <>
      <div className="col-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 text-light">THE GARAGE</h6>
        <div className="text-light">
          Somos una plataforma que conecta a los usuarios con las empresas de
          autopartes y accesorios para vehículos. Brindando una experiencia de
          compra única y personalizada.
        </div>
      </div>
      <div className="col-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 text-light">¿Qué buscas?</h6>
        <div className="d-flex flex-column">
          <NavLinkStyled margin="0px" to="/productos">
            Productos
          </NavLinkStyled>
          <NavLinkStyled margin="0px" to="/empresas">
            Empresas
          </NavLinkStyled>
        </div>
      </div>
      <div className="col-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4 text-light">
          Otros enlaces
        </h6>
        <div className="d-flex flex-column">
          <NavLinkStyled margin="0px" to="/pqr">
            Contáctanos
          </NavLinkStyled>
          <NavLinkStyled margin="0px" to="/acercade">
            Acerca de nosotros
          </NavLinkStyled>
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
