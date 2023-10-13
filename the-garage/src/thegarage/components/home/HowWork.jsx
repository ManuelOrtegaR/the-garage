import { StepComponent } from './StepComponent';
import { SubTitleStyled, TextStyled } from './ComponentsStyles';
import rueda from '../../../../assets/images/home/rueda.png';
import engrane from '../../../../assets/images/home/engrane.png';
import taller from '../../../../assets/images/home/taller.png';
import herramientas from '../../../../assets/images/home/herramientas.png';

const step1 = 'Busca el producto o servicio deseado';
const step2 = '¡Realiza la compra o solicita un servicio!';
const step3 = 'Paga el total de los productos o parte del servicio';
const step4 = '¡Recibe los productos o retira tu auto!';

export const HowWork = () => {
  return (
    <>
      <SubTitleStyled>¿Cómo funciona?</SubTitleStyled>
      <TextStyled>
        4 pasos para acceder a los mejores productos y servicios en un abrir y
        cerrar de ojos
      </TextStyled>
      <div
        className="d-flex gap-5 justify-content-center"
        style={{ height: 400 }}
      >
        <StepComponent numb={1} text={step1} img={rueda} color="blue" />
        <div className="d-flex align-self-end gap-5">
          <StepComponent numb={2} text={step2} img={engrane} color="red" />
          <StepComponent numb={3} text={step3} img={taller} color="yellow" />
        </div>
        <StepComponent numb={4} text={step4} img={herramientas} color="green" />
      </div>
    </>
  );
};
