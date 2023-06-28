import {
  NavClient,
  ChangePassword,
  Messages,
  Orders,
  PersonalInformation,
  ShoppingCart,
  CompanyAccount,
} from '../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { User, navTest } from '../pages/ClientProfile';

export const AdminProfile = () => {
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-around border rounded m-2 fs-4 fw-bold">
          <span>Account Name: Admin</span>
          <span>E-Mail: Admin@example.com</span>
          <span>Role: Admin</span>
        </div>
      </Container>
      <Container fluid>
        <Row>
          <Col md={2} className="border-end">
            <NavClient />
          </Col>
          <Col>
            {navTest === 1 ? (
              <CompanyAccount />
            ) : navTest === 2 ? (
              <CompanyAccount />
            ) : navTest === 3 ? (
              <ShoppingCart />
            ) : navTest === 4 ? (
              <ShoppingCart />
            ) : navTest === 5 ? (
              <CompanyAccount />
            ) : (
              <Messages />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
