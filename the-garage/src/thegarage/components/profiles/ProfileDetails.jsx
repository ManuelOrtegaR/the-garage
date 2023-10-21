import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import { useAdressLocation } from '../../../domain/useAddressLocation';
import { ClientProfile } from './ClientProfile';
import { CompanyProfile } from './CompanyProfile';
import { AdminProfile } from './AdminProfile';

export const ProfileDetails = () => {
  const { user, login } = useContext(AuthContext);
  const [handelUpdate, setHandelUpdate] = useState(false);
  const { departments, city, cargarCiudades } = useAdressLocation();

  const handleChangeDepartment = async (event) => {
    const value = event.target.value;
    cargarCiudades(value);
  };

  return (
    <div className="d-flex align-items-center">
      {user.userClass === 'Cliente' ? (
        <ClientProfile
          user={user}
          login={login}
          handelUpdate={handelUpdate}
          setHandelUpdate={setHandelUpdate}
          departments={departments}
          city={city}
          handleChangeDepartment={handleChangeDepartment}
        />
      ) : user.userClass === 'Empresa' ? (
        <CompanyProfile
          user={user}
          login={login}
          handelUpdate={handelUpdate}
          setHandelUpdate={setHandelUpdate}
          departments={departments}
          city={city}
          handleChangeDepartment={handleChangeDepartment}
        />
      ) : (
        <AdminProfile
          user={user}
          login={login}
          handelUpdate={handelUpdate}
          setHandelUpdate={setHandelUpdate}
          departments={departments}
          city={city}
          handleChangeDepartment={handleChangeDepartment}
        />
      )}
    </div>
  );
};
