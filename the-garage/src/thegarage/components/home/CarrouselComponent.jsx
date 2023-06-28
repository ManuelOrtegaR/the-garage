import Carousel from 'react-bootstrap/Carousel';
import exampleImage from '../../../../assets/images/home/exampleImage.jpg';
import exampleImage2 from '../../../../assets/images/home/exampleImage2.jpg';
import exampleImage3 from '../../../../assets/images/home/exampleImage3.jpg';
import styled from '@emotion/styled';
import { BtnDangerLinkStyled } from '../../../components/StyledButtons';

export const CarrouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage3}
          alt="products slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-center pb-5">
          <CarouselTitle className="mb-5">
            ENCUENTRA LOS MEJORES PRODUCTOS PARA EL CUIDADO DE TU VEHÍCULO
          </CarouselTitle>
          <BtnDangerLinkStyled width="100px" to="/productos">
            Productos
          </BtnDangerLinkStyled>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage}
          alt="services slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-center pb-5">
          <CarouselTitle className="mb-5">
            DESCUBRE TODAS LAS OPCIONES DE SERVICIOS ESPECIALIZADOS PARA TU
            VEHICULO EN TU CIUDAD
          </CarouselTitle>
          <BtnDangerLinkStyled to="/servicios">Servicios</BtnDangerLinkStyled>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage2}
          alt="company slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-center pb-5">
          <CarouselTitle className="mb-5">
            SELECCIONA LA EMPRESA DE TU PREFERENCIA Y ENTERATE DE LOS PRODUCTOS
            QUE OFRECEN
          </CarouselTitle>
          <BtnDangerLinkStyled to="/empresas">Empresas</BtnDangerLinkStyled>
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
