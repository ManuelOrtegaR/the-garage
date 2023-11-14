/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Alejandro from '../../../../assets/images/home/cardsPresentation/Alejandro.jpg';
import Diana from '../../../../assets/images/home/cardsPresentation/Diana.png';
import Welinton from '../../../../assets/images/home/cardsPresentation/Welinton.png';
import Manuel from '../../../../assets/images/home/cardsPresentation/Manuel.jpg';
import htmlIcon from '../../../../assets/images/home/cardsPresentation/html-5.svg';
import csslIcon from '../../../../assets/images/home/cardsPresentation/css-3.svg';
import jsIcon from '../../../../assets/images/home/cardsPresentation/javascript-logo.svg';
import reactIcon from '../../../../assets/images/home/cardsPresentation/react.svg';
import gitIcon from '../../../../assets/images/home/cardsPresentation/git.svg';
import nodeJsIcon from '../../../../assets/images/home/cardsPresentation/node-js.svg';

export const TeamCard = ({ name, description }) => {
  const userPhoto = (name) => {
    const user = ['Alejandro', 'Diana', 'Welinton', 'Manuel'].filter(
      (element) => name.includes(element),
    );
    if (user == 'Alejandro') {
      return Alejandro;
    } else {
      if (user == 'Diana') {
        return Diana;
      } else {
        if (user == 'Welinton') {
          return Welinton;
        } else {
          if (user == 'Manuel') {
            return Manuel;
          }
        }
      }
    }
  };

  return (
    <Card style={{ width: '15rem', padding: 5 }}>
      <Card.Img
        variant="top"
        style={{ height: 200, objectFit: 'cover' }}
        src={userPhoto(name)}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between mb-2">
          <img alt="html5" src={htmlIcon} height="20px"></img>
          <img alt="css3" src={csslIcon} height="20px"></img>
          <img alt="javascript" src={jsIcon} height="20px"></img>
          <img alt="react" src={reactIcon} height="20px"></img>
          <img alt="git" src={gitIcon} height="20px"></img>
          <img alt="nodeJs" src={nodeJsIcon} height="20px"></img>
        </div>
        <ButtonGroup aria-label="Basic example" className="w-100">
          <Button variant="light">
            <i className="bi bi-github"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-linkedin"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-envelope-at-fill"></i>
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
