import { StepComponent } from './StepComponent';
import { SubTitleStyled, TextStyled } from './ComponentsStyles';
import rueda from '../../../../assets/images/home/rueda.png';
import engrane from '../../../../assets/images/home/engrane.png';
import taller from '../../../../assets/images/home/taller.png';
import herramientas from '../../../../assets/images/home/herramientas.png';
import { Col, Row } from 'react-bootstrap';

const step1 = 'Busca el producto deseado y agregalo al carrito';
const step2 = '¡Realiza la compra!';
const step3 = 'Paga el total de los productos';
const step4 = '¡Recibe los productos o retira tu auto!';

export const HowWork = () => {
  return (
    <div style={{ minWidth: '700px' }}>
      <SubTitleStyled>¿Cómo funciona?</SubTitleStyled>
      <TextStyled>
        4 pasos para acceder a los mejores productos en un abrir y cerrar de
        ojos
      </TextStyled>
      <Row className="w-100 px-5">
        <Col className="d-flex justify-content-center mt-3 col-6 col-lg-3">
          <StepComponent numb={1} text={step1} img={rueda} color="blue" />
        </Col>
        <Col className="d-flex justify-content-center mt-3 col-6 col-lg-3">
          <StepComponent numb={2} text={step2} img={engrane} color="red" />
        </Col>
        <Col className="d-flex justify-content-center mt-3 col-6 col-lg-3">
          <StepComponent numb={3} text={step3} img={taller} color="yellow" />
        </Col>
        <Col className="d-flex justify-content-center mt-3 col-6 col-lg-3">
          <StepComponent
            numb={4}
            text={step4}
            img={herramientas}
            color="green"
          />
        </Col>
      </Row>
    </div>
  );
};
