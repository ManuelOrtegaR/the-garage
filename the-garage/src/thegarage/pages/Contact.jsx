import {
  SubTitleStyled,
  TextStyled,
} from '../components/home/ComponentsStyles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
  return (
    <>
      <div className="mt-4">
        <SubTitleStyled>CONTACTANOS</SubTitleStyled>
        <div className="row bg-light m-4 p-3 rounded">
          <div className="col-6 d-flex flex-column">
            <TextStyled>Envíanos tus datos</TextStyled>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Ingrese su nombre"
              className="mb-2"
            />
            <Form.Control
              name="correo"
              type="email"
              placeholder="example@example.com"
              className="mb-2"
            />
            <Form.Control
              name="pregunta"
              as="textarea"
              placeholder="Escriba el detalle de su consulta"
            />
            <Form.Label className="text-secondary">
              Nosotros no compartiremos sus datos con nadie
            </Form.Label>
            <Button className="bg-main-color">Enviar</Button>
          </div>
          <div className="col-6 d-flex flex-column">
            <TextStyled>Encuentranos</TextStyled>
            <div className="row align-items-center">
              <div className="col-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18913.802088584853!2d-74.0955343109588!3d4.746218924708735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1687744931965!5m2!1ses-419!2sco"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
              <div className="col-6">
                <p>Dirección: Cll 16 #21-54</p>
                <p>Ciudad: Bogotá, Colombia</p>
                <p>Correo: info@thegarage.com</p>
                <p>Celular: + 57 310 655 8974</p>
                <p>Whatsapp: + 57 310 655 8974</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
