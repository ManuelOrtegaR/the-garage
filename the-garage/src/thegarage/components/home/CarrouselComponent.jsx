import Carousel from 'react-bootstrap/Carousel';
import exampleImage from '../../../../assets/images/home/exampleImage.jpg';
import exampleImage2 from '../../../../assets/images/home/exampleImage2.jpg';
import exampleImage3 from '../../../../assets/images/home/exampleImage3.jpg';
import { BtnDangerLinkStyled } from '../../../components/StyledButtons';
import { CarouselTitle } from './StyledsComponents';

export const CarrouselComponent = () => {
  const items = [
    {
      title: 'ENCUENTRA LOS MEJORES PRODUCTOS PARA EL CUIDADO DE TU VEHÍCULO',
      image: exampleImage3,
      link: '/productos',
      alt: 'products slide',
      id: 1,
      name: 'Productos',
    },
    {
      title:
        'DESCUBRE TODAS LAS OPCIONES DE PRODUCTOS ESPECIALIZADOS PARA TU VEHÍCULO EN TU CIUDAD',
      image: exampleImage,
      link: '/contacto',
      alt: 'contact slide',
      id: 2,
      name: 'Contacto',
    },
    {
      title:
        'SELECCIONA LA EMPRESA DE TU PREFERENCIA Y ENTERATE DE LOS PRODUCTOS QUE OFRECEN',
      image: exampleImage2,
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
          <img className="d-block w-100" src={item.image} alt={item.alt} />
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
