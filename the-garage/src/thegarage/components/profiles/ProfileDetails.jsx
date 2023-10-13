import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import { useAdressLocation } from '../../../domain/useAddressLocation';
import { ClientProfile } from './ClientProfile';
import { CompanyProfile } from './CompanyProfile';

export const ProfileDetails = () => {
  const { user, login } = useContext(AuthContext);
  const [handelUpdate, setHandelUpdate] = useState(false);
  const { departments, city, cargarCiudades } = useAdressLocation();

  const handleChangeDepartment = async (event) => {
    const value = event.target.value;
    cargarCiudades(value);
  };

  const fileInputRef = useRef(null);

  const changeImageInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="d-flex align-items-center justify-content-around">
      {user.userClass === 'client' ? (
        <ClientProfile
          user={user}
          login={login}
          handelUpdate={handelUpdate}
          setHandelUpdate={setHandelUpdate}
          departments={departments}
          city={city}
          handleChangeDepartment={handleChangeDepartment}
          changeImageInput={changeImageInput}
          fileInputRef={fileInputRef}
        />
      ) : (
        <CompanyProfile
          user={user}
          login={login}
          handelUpdate={handelUpdate}
          setHandelUpdate={setHandelUpdate}
          departments={departments}
          city={city}
          handleChangeDepartment={handleChangeDepartment}
          changeImageInput={changeImageInput}
          fileInputRef={fileInputRef}
        />
      )}
    </div>
  );
};
