import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Pagination from 'react-bootstrap/Pagination';

export const Messages = () => {
  return (
    <div className="position-relative border text-center m-auto w-75">
      <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
        <h5>Messages</h5>
      </div>

      <div className="mx-5 mt-5 mb-2 d-flex flex-column align-items-center">
        <ListGroup as="ul">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center p-2"
          >
            <img src="https://placehold.co/50x25" className="rounded" />
            <span className="lh-1 text-start w-50">
              Este es un texto con ciertas caracteristicas que no puedo
              mensionar gustele a quien le guste.
            </span>
            <span>Status</span>
            <Nav.Link href="/home">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center p-2"
          >
            <img src="https://placehold.co/50x25" className="rounded" />
            <span className="lh-1 text-start w-50">Messages.</span>
            <span>Status</span>
            <Nav.Link href="/home">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center p-2"
          >
            <img src="https://placehold.co/50x25" className="rounded" />
            <span className="lh-1 text-start w-50">Messages.</span>
            <span>Status</span>
            <Nav.Link href="/home">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>
        </ListGroup>

        <Pagination className="m-2">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};
