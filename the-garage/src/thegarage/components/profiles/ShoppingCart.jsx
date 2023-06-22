import { User, navTest } from '../../pages';

import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Pagination from 'react-bootstrap/Pagination';

export const ShoppingCart = () => (
  <div className="position-relative border text-center m-auto w-75">
    <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
      <h5>
        {User === 'Client'
          ? 'Shopping Cart'
          : navTest === 3
          ? 'Products'
          : 'Services'}
      </h5>
    </div>

    <div className="mx-5 mt-4 mb-2 d-flex flex-column align-items-center">
      {User === 'Company' ? (
        <div className="d-flex justify-content-between align-items-center col-11 m-2">
          <button type="button" className="btn btn-primary">
            {navTest === 3 ? 'Add Product' : 'Add Service'}
          </button>
          <nav>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">
                <i className="bi bi-funnel-fill"></i>
              </Nav.Link>
            </Nav>
          </nav>
        </div>
      ) : null}
      <ListGroup as="ul">
        {User === 'Client' ? (
          <>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-center align-items-center m-0"
            >
              <img
                src="https://placehold.co/100x60"
                className="rounded m-1 col-1"
              />
              <span className="p-1 col-8 lh-1 text-start">
                Este es un texto con ciertas caracteristicas que no puedo
                mensionar gustele a quien le guste.
              </span>
              <span className="p-2 col-2">Status</span>
              <Nav.Link href="/home" className="p-2 col-1">
                <i className="bi bi-eye-fill"></i>
              </Nav.Link>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-center align-items-center m-0"
            >
              <img
                src="https://placehold.co/100x60"
                className="rounded m-1 col-1"
              />
              <span className="p-1 col-8 lh-1 text-start">Messages.</span>
              <span className="p-2 col-2">Status</span>
              <Nav.Link href="/home" className="p-2 col-1">
                <i className="bi bi-eye-fill"></i>
              </Nav.Link>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-center align-items-center m-0"
            >
              <img
                src="https://placehold.co/100x60"
                className="rounded m-1 col-1"
              />
              <span className="p-1 col-8 lh-1 text-start">Messages.</span>
              <span className="p-2 col-2">Status</span>
              <Nav.Link href="/home" className="p-2 col-1">
                <i className="bi bi-eye-fill"></i>
              </Nav.Link>
            </ListGroup.Item>
          </>
        ) : (
          <>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-center align-items-center m-0"
            >
              <img
                src="https://placehold.co/100x60"
                className="rounded m-1 col-1"
              />
              <span className="p-1 col-7 lh-1 text-start">
                Este es un texto con ciertas caracteristicas que no puedo
                mensionar gustele a quien le guste.
              </span>
              <span className="p- col-1">Value</span>
              <span className="p-2 col-2">
                {navTest === 3 ? 'Stock' : 'Time'}
              </span>
              <Nav.Link href="/home" className="p-2 col-1">
                <i className="bi bi-pencil-fill"></i>
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-center align-items-center m-0"
            >
              <img
                src="https://placehold.co/100x60"
                className="rounded m-1 col-1"
              />
              <span className="p-1 col-7 lh-1 text-start">Description.</span>
              <span className="p- col-1">Value</span>
              <span className="p-2 col-2">
                {navTest === 3 ? 'Stock' : 'Time'}
              </span>
              <Nav.Link href="/home" className="p-2 col-1">
                <i className="bi bi-pencil-fill"></i>
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-center align-items-center m-0"
            >
              <img
                src="https://placehold.co/100x60"
                className="rounded m-1 col-1"
              />
              <span className="p-1 col-7 lh-1 text-start">Description.</span>
              <span className="p- col-1">Value</span>
              <span className="p-2 col-2">
                {navTest === 3 ? 'Stock' : 'Time'}
              </span>
              <Nav.Link href="/home" className="p-2 col-1">
                <i className="bi bi-pencil-fill"></i>
              </Nav.Link>
            </ListGroup.Item>
          </>
        )}
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
