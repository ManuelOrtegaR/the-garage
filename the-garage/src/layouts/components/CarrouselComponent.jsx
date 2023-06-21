import { Button, Carousel } from 'react-bootstrap';
import exampleImage from '../../assets/exampleImage.jpg';

export const CarrouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage}
          alt="products slide"
        />
        <Carousel.Caption>
          <h3 className="carrouselItem">
            ENCUENTRA LOS MEJORES PRODUCTOS PARA EL CUIDADO DE TU VEHÍCULO
          </h3>
          <Button variant="danger" size="lg">
            Productos
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage}
          alt="services slide"
        />
        <Carousel.Caption>
          <h3 className="carrouselItem">
            DESCUBRE TODAS LAS OPCIONES DE SERVICIOS ESPECIALIZADOS PARA TU
            VEHICULO EN TU CIUDAD
          </h3>
          <Button variant="danger" size="lg">
            Servicios
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={exampleImage} alt="company slide" />
        <Carousel.Caption>
          <h3 className="carrouselItem">
            SELECCIONA LA EMPRESA DE TU PREFERENCIA Y ENTERATE DE LOS PRODUCTOS
            QUE OFRECEN
          </h3>
          <Button variant="danger" size="lg">
            Servicios
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
