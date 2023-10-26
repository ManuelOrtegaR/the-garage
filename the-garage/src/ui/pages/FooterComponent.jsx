import { NavLink } from 'react-router-dom';
import { FooterSection, NavbarStyled } from '../components';
import { Col, Row } from 'react-bootstrap';

export const FooterComponent = () => {
  return (
    <NavbarStyled style={{ minWidth: '700px' }}>
      <Col>
        <Row>
          <FooterSection />
        </Row>
        <div className="text-center text-white">
          © 2021 Copyright:
          <NavLink className="text-reset fw-bold" to="/home">
            thegarage.com
          </NavLink>
        </div>
      </Col>
    </NavbarStyled>
  );
};
