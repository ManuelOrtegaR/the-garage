import { TeamCard } from '../../../home';
import Nav from 'react-bootstrap/Nav';

export const DetailsCompany = () => {
  return (
    <div className="position-relative border text-center m-auto">
      <div className="m-2 align-items-center">
        <div className="border-bottom p-3">
          <h3 className="d-flex justify-content-center">
            Historia
            <Nav.Link href="/home" className="ps-2">
              <i
                className="bi bi-pencil-fill"
                // style={{ width: 4, height: 4 }}
              ></i>
            </Nav.Link>
          </h3>

          <p className="text-start">
            La historia de la empresa o empresarial es el estudio de dos
            categorías de análisis que se distinguen en cuanto a su metodología
            y objeto de estudio: la empresa y el empresario. Sin embargo, ambas
            categorías guardan una estrecha complementariedad entre sus
            variables y factores. Esta disciplina histórica puede fijar su
            atención en la evolución de la organización económica o centrar su
            interés en la investigación de los empresarios, es decir, aquellos
            actores sociales responsables de la administración de la unidad
            económica llamada empresa
          </p>
        </div>
        <div className="d-flex border-bottom ">
          <div className="p-3">
            <h3 className="d-flex justify-content-center">
              Mision
              <Nav.Link href="/home" className="ps-2">
                <i
                  className="bi bi-pencil-fill"
                  // style={{ width: 4, height: 4 }}
                ></i>
              </Nav.Link>
            </h3>
            <p className="text-start">
              La misión describe el motivo o la razón de ser de una
              organización, empresa o institución. Se enfoca en los objetivos a
              cumplir en el presente. Debe estar definida de manera precisa y
              concreta para guiar al grupo de trabajo en el día a día. Por
              ejemplo: La misión de la compañía es mejorar la calidad de los
              automóviles.
            </p>
          </div>
          <div className="border-start p-3">
            <h3 className="d-flex justify-content-center">
              Vision
              <Nav.Link href="/home" className="ps-2">
                <i
                  className="bi bi-pencil-fill"
                  // style={{ width: 4, height: 4 }}
                ></i>
              </Nav.Link>
            </h3>
            <p className="text-start">
              La visión describe una expectativa ideal sobre lo que se espera
              que la organización sea o alcance en un futuro. Debe ser realista,
              pero puede ser ambiciosa; su función es guiar y motivar al grupo
              para continuar con el trabajo. Por ejemplo: La visión de la
              compañía es convertirse en la productora de automóviles de mejor
              calidad del mercado local.
            </p>
          </div>
        </div>
        <div className="p-3 row gap-3 justify-content-around">
          <h3 className="d-flex justify-content-center">
            Equipo de trabajo
            <Nav.Link href="/home" className="ps-2">
              <i
                className="bi bi-pencil-fill"
                // style={{ width: 4, height: 4 }}
              ></i>
            </Nav.Link>
          </h3>
          <TeamCard name="Alejandro Gomez" description="Full Stack Developer" />
          <TeamCard name="Diana" description="Full Stack Developer" />
          <TeamCard name="Welinton" description="Full Stack Developer" />
          <TeamCard name="Manuel Ortega" description="Full Stack Developer" />
        </div>
      </div>
    </div>
  );
};
