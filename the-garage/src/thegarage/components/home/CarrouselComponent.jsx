import Carousel from 'react-bootstrap/Carousel';

import carrousel_picture_1 from '../../../../assets/images/home/carrousel/carrousel_picture_1.jpg';
import carrousel_picture_2 from '../../../../assets/images/home/carrousel/carrousel_picture_2.jpg';
import carrousel_picture_3 from '../../../../assets/images/home/carrousel/carrousel_picture_3.jpg';
import { BtnDangerLinkStyled } from '../../../components/StyledButtons';
import { CarouselTitle } from './StyledsComponents';

export const CarrouselComponent = () => {
  const items = [
    {
      title: 'ENCUENTRA LOS MEJORES PRODUCTOS PARA EL CUIDADO DE TU VEHÍCULO',
      image: carrousel_picture_3,
      link: '/productos',
      alt: 'products slide',
      id: 1,
      name: 'Productos',
    },
    {
      title:
        'CONTACTA CON NUESTRO EQUIPO DE SOPORTE PARA MÁS INFORMACIÓN SOBRE NUESTROS SERVICIOS',
      image: carrousel_picture_1,
      link: '/contacto',
      alt: 'contact slide',
      id: 2,
      name: 'Contacto',
    },
    {
      title:
        'SELECCIONA LA EMPRESA DE TU PREFERENCIA Y ENTERATE DE LOS PRODUCTOS QUE OFRECEN',
      image: carrousel_picture_2,
      link: '/empresas',
      alt: 'company slide',
      id: 3,
      name: 'Empresas',
    },
  ];

  return (
    <Carousel style={{ minWidth: '700px' }}>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-10"
            style={{ width: '100%', height: 500, objectFit: 'cover' }}
            src={item.image}
            alt={item.alt}
          />
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center gap-5">
            <CarouselTitle>{item.title}</CarouselTitle>
            <BtnDangerLinkStyled width="100px" to="/productos">
              {item.name}
            </BtnDangerLinkStyled>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
