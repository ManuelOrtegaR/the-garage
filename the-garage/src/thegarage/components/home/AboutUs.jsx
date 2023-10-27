import { SubTitleStyled, TextStyled } from './ComponentsStyles';
import { TeamCard } from './TeamCard';

export const AboutUs = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#163252',
          borderRadius: '100px 0px 100px 0px',
          padding: '50px',
          minWidth: '700px',
        }}
      >
        <SubTitleStyled color="white" className="mb-4">
          ¿Quiénes somos?
        </SubTitleStyled>
        <TextStyled color="white">
          Somos una empresa líder en el sector automotriz dedicada a conectar a
          las empresas de autos con los clientes que buscan productos, repuestos
          de calidad. Nuestra plataforma ofrece un espacio virtual que facilita
          la interacción y transacciones entre ambas partes, brindando
          comodidad, eficiencia y confianza en cada paso del proceso. Nuestro
          objetivo es simplificar la búsqueda y adquisición de productos
          automotrices, fomentando una experiencia satisfactoria tanto para las
          empresas como para los clientes. Con un enfoque en la calidad,
          variedad y excelencia en el servicio, nos esforzamos por ser el puente
          que une las necesidades automotrices con las soluciones más adecuadas.
        </TextStyled>
        <div className="mt-5">
          <SubTitleStyled color="white">Nuestro Equipo</SubTitleStyled>

          <div className="row gap-3 justify-content-around mt-5">
            <TeamCard name="Diana" description="Full Stack Developer" />
            <TeamCard name="Welinton" description="Full Stack Developer" />
            <TeamCard name="Manuel Ortega" description="Full Stack Developer" />
            <TeamCard
              name="Alejandro Gomez"
              description="Full Stack Developer"
            />
          </div>
        </div>
      </div>
    </>
  );
};
