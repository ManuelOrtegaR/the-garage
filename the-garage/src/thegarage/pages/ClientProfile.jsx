import {
  NavClient,
  ChangePassword,
  Messages,
  Orders,
  PersonalInformation,
  ShoppingCart,
} from '../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavComponent } from '../../ui/pages/NavComponent';
import { AdminProfile } from './AdminProfile';

// eslint-disable-next-line react-refresh/only-export-components
export const User = 'Admin';
export const Config = true;
// eslint-disable-next-line react-refresh/only-export-components
export const navTest = 1;

export function ClientProfile() {
  return (
    <>
      <NavComponent />
      {User != 'Admin' ? (
        <Container fluid>
          <Row>
            <Col md={2} className="border-end">
              <NavClient />
            </Col>
            <Col>
              <PersonalInformation />
              {User === 'Client' ? (
                navTest === 1 ? (
                  <ChangePassword />
                ) : navTest === 2 ? (
                  <Orders />
                ) : navTest === 3 ? (
                  <ShoppingCart />
                ) : (
                  <Messages />
                )
              ) : User === 'Company' ? (
                navTest === 1 ? (
                  <ChangePassword />
                ) : navTest === 2 ? (
                  <ChangePassword />
                ) : navTest === 3 || navTest === 4 ? (
                  <ShoppingCart />
                ) : navTest === 5 ? (
                  <Orders />
                ) : navTest === 6 ? (
                  <Messages />
                ) : null
              ) : null}
            </Col>
          </Row>
        </Container>
      ) : (
        <AdminProfile />
      )}
    </>
  );
}
