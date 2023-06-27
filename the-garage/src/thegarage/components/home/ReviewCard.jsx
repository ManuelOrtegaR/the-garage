import Card from 'react-bootstrap/Card';
import { StarRating } from './StarRating';
import userIcon from '../../../../assets/images/home/user.png';

export const ReviewCard = () => {
  return (
    <Card border="main-color">
      <Card.Header>
        <Card.Img variant="top" src={userIcon} style={{ width: 50 }} />
        JAVIER GUZMAN
      </Card.Header>
      <Card.Body>
        <Card.Title>La tienda TodoAutos es buena</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          explicabo consequuntur modi ipsum, nulla totam inventore doloribus,
          velit aperiam veritatis ullam rem iste mollitia unde libero ducimus,
          voluptatum suscipit ad.
        </Card.Text>
        <div className="d-flex justify-content-center">
          <StarRating />
        </div>
      </Card.Body>
    </Card>
  );
};
