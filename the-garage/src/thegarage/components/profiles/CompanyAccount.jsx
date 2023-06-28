import Nav from 'react-bootstrap/Nav';
import Pagination from 'react-bootstrap/Pagination';
import ListGroup from 'react-bootstrap/ListGroup';

export const CompanyAccount = () => {
  return (
    <div className=" position-relative border text-center m-4">
      <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
        <h5>Company</h5>
      </div>

      <div className="mt-1 mb-2 mx-3 d-flex flex-column align-items-center">
        <div className="d-flex justify-content-between align-items-center col-11 m-2">
          <button type="button" className="btn btn-danger">
            Delete Account
          </button>
          <nav>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">
                <i className="bi bi-funnel-fill"></i>
              </Nav.Link>
            </Nav>
          </nav>
        </div>

        <ListGroup as="ul" className="w-100">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/75x45" className="rounded m-1" />
            <span className="p-2 lh-1 text-start">Name</span>
            <span className="p-2">Date</span>
            <span className="p-2">Status</span>
            <Nav.Link href="/home" className="p-2">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/75x45" className="rounded m-1" />
            <span className="p-2 lh-1 text-start">Name</span>
            <span className="p-2">Date</span>
            <span className="p-2">Status</span>
            <Nav.Link href="/home" className="p-2">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/75x45" className="rounded m-1" />
            <span className="p-2 lh-1 text-start">Name</span>
            <span className="p-2">Date</span>
            <span className="p-2">Status</span>
            <Nav.Link href="/home" className="p-2">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/75x45" className="rounded m-1" />
            <span className="p-2 lh-1 text-start">Name</span>
            <span className="p-2">Date</span>
            <span className="p-2">Status</span>
            <Nav.Link href="/home" className="p-2">
              <i className="bi bi-eye-fill"></i>
            </Nav.Link>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-around align-items-center m-0 position-relative"
          >
            <img src="https://placehold.co/75x45" className="rounded m-1" />
            <span className="p-2 lh-1 text-start">Name</span>
            <span className="p-2">Date</span>
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
