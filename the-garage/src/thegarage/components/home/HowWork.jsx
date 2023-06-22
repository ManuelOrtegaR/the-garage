import { StepComponent } from './StepComponent';
import { SubTitleStyled, TextStyled } from './StyledsComponents';

export const HowWork = () => {
  return (
    <>
      <SubTitleStyled>¿Cómo funciona?</SubTitleStyled>
      <TextStyled>
        4 pasos para acceder a los mejores productos y servicios en un abrir y
        cerrar de ojos
      </TextStyled>
      <div
        className="d-flex gap-3 justify-content-center"
        style={{ height: 350 }}
      >
        <StepComponent />
        <div className="d-flex align-self-end gap-3">
          <StepComponent />
          <StepComponent />
        </div>
        <StepComponent />
      </div>
    </>
  );
};
