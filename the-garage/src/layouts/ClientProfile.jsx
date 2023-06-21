import { NavClient } from './NavClient';
import { PersonalInformation } from './PersonalInformation';
import { ChangePassword } from './ChangePassword';
import { Orders } from './Orders';
import { ShoppingCart } from './ShoppingCart';
import { Messages } from './Messages';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// eslint-disable-next-line react-refresh/only-export-components
export const User = 'Company';
// eslint-disable-next-line react-refresh/only-export-components
export const navTest = 6;

export default function ClientProfile() {
  return (
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
  );
}
