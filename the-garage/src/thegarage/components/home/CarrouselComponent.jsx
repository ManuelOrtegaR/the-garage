import Carousel from 'react-bootstrap/Carousel';
import exampleImage from '../../../../assets/images/home/exampleImage.jpg';
import exampleImage2 from '../../../../assets/images/home/exampleImage2.jpg';
import exampleImage3 from '../../../../assets/images/home/exampleImage3.jpg';
import { ButtonStyled } from './ComponentsStyles';
import styled from '@emotion/styled';

export const CarrouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage3}
          alt="products slide"
        />
        <Carousel.Caption>
          <CarouselTitle className="mb-4">
            ENCUENTRA LOS MEJORES PRODUCTOS PARA EL CUIDADO DE TU VEHÍCULO
          </CarouselTitle>
          <ButtonStyled to="/productos">Productos</ButtonStyled>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage}
          alt="services slide"
        />
        <Carousel.Caption>
          <CarouselTitle className="mb-4">
            DESCUBRE TODAS LAS OPCIONES DE SERVICIOS ESPECIALIZADOS PARA TU
            VEHICULO EN TU CIUDAD
          </CarouselTitle>
          <ButtonStyled to="/servicios">Servicios</ButtonStyled>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage2}
          alt="company slide"
        />
        <Carousel.Caption>
          <CarouselTitle className="mb-4">
            SELECCIONA LA EMPRESA DE TU PREFERENCIA Y ENTERATE DE LOS PRODUCTOS
            QUE OFRECEN
          </CarouselTitle>
          <ButtonStyled to="/empresas">Empresas</ButtonStyled>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const CarouselTitle = styled('h3')({
  fontFamily: 'Anton',
  fontSize: '4rem',
  textShadow: '4px 3px 2px black',
});
