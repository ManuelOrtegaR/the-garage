import {
  ChangePassword,
  Messages,
  NavClient,
  Orders,
  PersonalInformation,
} from './client';
import { ShoppingCart } from '../../../pages/';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
//import { ClientRoute } from './routes';

export function SettingsClient() {
  return (
    <>
      <Container fluid className="my-4">
        <Row>
          <Col md={2} className="border-end">
            <NavClient />
          </Col>
          <Col>
            <PersonalInformation />
            <Messages />
          </Col>
        </Row>
      </Container>
    </>
  );
}
