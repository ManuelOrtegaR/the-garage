import { Card } from 'react-bootstrap';
import { StarRating } from './StarRating';
import user from '../../assets/user.png';

export const ReviewsComponent = () => {
  return (
    <>
      <h2 className="d-flex justify-content-center mt-4">Comentarios</h2>
      <div className="d-flex justify-content-center gap-3">
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>
            <Card.Img variant="top" src={user} style={{ width: 50 }} />
            JAVIER GUZMAN
          </Card.Header>
          <Card.Body>
            <Card.Title>La tienda TodoAutos es buena</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo consequuntur modi ipsum, nulla totam inventore
              doloribus, velit aperiam veritatis ullam rem iste mollitia unde
              libero ducimus, voluptatum suscipit ad.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <StarRating />
            </div>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>
            <Card.Img variant="top" src={user} style={{ width: 50 }} />
            JAVIER GUZMAN
          </Card.Header>
          <Card.Body>
            <Card.Title>La tienda TodoAutos es buena</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo consequuntur modi ipsum, nulla totam inventore
              doloribus, velit aperiam veritatis ullam rem iste mollitia unde
              libero ducimus, voluptatum suscipit ad.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <StarRating />
            </div>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>
            <Card.Img variant="top" src={user} style={{ width: 50 }} />
            JAVIER GUZMAN
          </Card.Header>
          <Card.Body>
            <Card.Title>La tienda TodoAutos es buena</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo consequuntur modi ipsum, nulla totam inventore
              doloribus, velit aperiam veritatis ullam rem iste mollitia unde
              libero ducimus, voluptatum suscipit ad.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <StarRating />
            </div>
          </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>
            <Card.Img variant="top" src={user} style={{ width: 50 }} />
            JAVIER GUZMAN
          </Card.Header>
          <Card.Body>
            <Card.Title>La tienda TodoAutos es buena</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo consequuntur modi ipsum, nulla totam inventore
              doloribus, velit aperiam veritatis ullam rem iste mollitia unde
              libero ducimus, voluptatum suscipit ad.
            </Card.Text>
            <div className="d-flex justify-content-center">
              <StarRating />
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
