import { NavLink } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FooterSection, NavbarStyled } from '../components';

export const FooterComponent = () => {
  return (
    <NavbarStyled style={{ minWidth: '700px', paddingTop: '50px' }}>
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
