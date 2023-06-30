import Container from 'react-bootstrap/Container';
import { user } from '../../../../../ui/components';
export const AdminInformation = () => {
  return (
    <Container fluid>
      <div className="d-flex justify-content-around border rounded m-2 fs-4 fw-bold">
        <span>Nombre de cuenta: {user[2].name}</span>
        <span>E-Mail: {user[2].email}</span>
        <span>Role: {user[2].role}</span>
      </div>
    </Container>
  );
};
