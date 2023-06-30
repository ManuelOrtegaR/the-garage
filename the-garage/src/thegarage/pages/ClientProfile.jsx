// import { Container, NavLink } from 'react-bootstrap';
// import { ClientRoute } from '../components';
// import {
//   ChangePassword,
//   Orders,
//   Messages,
// } from '../components/profiles/pages/client/';
// import userImg from '../../../assets/images/home/user.png';
// import { Route, Routes, Navigate } from 'react-router-dom';
import { SettingsAdmin } from '../components';
export const Config = false;

export function ClientProfile() {
  // const user = {
  //   type: 'Admin',
  //   name: 'test',
  //   email: 'test@thegarage.com',
  //   phone: '+57 321-2000-824',
  //   address: 'CR 24 #50-21',
  // };
  return (
    <>
      {/* <SettingsClient />
      <SettingsCompany /> */}
      <SettingsAdmin />
      {/* <Container fluid className="d-flex flex-row">
        {user.type !== 'Admin' && (
          <Container>
            <img src={userImg} style={{ width: 100 }}></img>
          </Container>
        )}
        <Container>
          <div>Nombre: {user.name}</div>
          <div>Correo: {user.email}</div>
          <div>Telefono: {user.phone}</div>
          <div>Direccion: {user.address}</div>
        </Container>
      </Container>
      <Container className="d-flex flex-row">
        <Container>
          {user.type !== 'Admin' && <NavLink>Contraseña</NavLink>}
          <NavLink>Ordenes</NavLink>
          {user.type === 'Client' && <NavLink>Carro de compras</NavLink>}
          {user.type === 'Company' && <NavLink>Detalles</NavLink>}
          {user.type !== 'Client' && (
            <>
              <NavLink>Productos</NavLink>
              <NavLink>Servicios</NavLink>
            </>
          )}
          {user.type === 'Admin' && (
            <>
              <NavLink>Solicitus de empresas</NavLink>
              <NavLink>Cuentas</NavLink>
            </>
          )}
          <NavLink>Mensages</NavLink>
          <NavLink>Cerrar sesion</NavLink>
        </Container>
        <Container>
          <div>Selecciona una opcion</div>
        </Container>
      </Container> */}
    </>
  );
}

