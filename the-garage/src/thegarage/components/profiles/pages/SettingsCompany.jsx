import { NavCompany, CompanyInformation, Messages } from './company';
//import { ShoppingCart } from '../../../pages/';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export function SettingsCompany() {
  return (
    <>
      <Container fluid className="my-4">
        <Row>
          <Col md={2} className="border-end">
            <NavCompany />
          </Col>
          <Col>
            <CompanyInformation />
            <Messages />
          </Col>
        </Row>
      </Container>
    </>
  );
}
