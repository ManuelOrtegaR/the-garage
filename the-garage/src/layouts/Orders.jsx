import { User } from './ClientProfile';

import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Pagination from 'react-bootstrap/Pagination';

export const Orders = () => {
  const widthOrders = User === 'Company' ? 'w-50' : 'w-75';
  return (
    <div
      className={widthOrders + ' position-relative border text-center m-auto'}
    >
      <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
        <h5>Orders</h5>
      </div>

      <div className="mx-5 mt-5 mb-2 d-flex flex-column align-items-center">
        {User === 'Company' ? (
          <div className="d-flex justify-content-between align-items-center col-11 m-2">
            <select
              className="form-select w-auto"
              aria-label="Default select example"
            >
              <option selected>Products / Services</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <nav>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">
                  <i className="bi bi-funnel-fill"></i>
                </Nav.Link>
              </Nav>
            </nav>
          </div>
        ) : null}
        <ListGroup as="ul" className="w-100">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-center align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/50x25" className="rounded m-1" />
            <span className="w-100 p-2 lh-1 text-start">
              {User === 'Company'
                ? 'User'
                : 'Este es un texto con ciertas caracteristicas que no puedo mensionar gustele a quien le guste.'}
            </span>
            <span className="p-2">
              {User === 'Company' ? 'Order' : 'Value'}
            </span>
            <span className="p-2">Status</span>
            <Nav.Link href="/home" className="p-2">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-center align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/50x25" className="rounded m-1" />
            <span className="w-100 p-2 lh-1 text-start">
              {User === 'Company' ? 'User' : 'Description.'}
            </span>
            <span className="p-2">
              {User === 'Company' ? 'Order' : 'Value'}
            </span>
            <span className="p-2">Status</span>
            <Nav.Link href="/home" className="p-2">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-center align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/50x25" className="rounded m-1" />
            <span className="w-100 p-2 lh-1 text-start">
              {User === 'Company' ? 'User' : 'Description.'}
            </span>
            <span className="p-2">
              {User === 'Company' ? 'Order' : 'Value'}
            </span>
            <span className="p-2">Status</span>
            <Nav.Link href="/home" className="p-2">
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
