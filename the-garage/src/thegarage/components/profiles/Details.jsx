import { BtnSubmitStyled } from '../../../components/StyledButtons';
import { NavLinkEdit } from './StylesComponentsProfiles';
import { users } from './TestProfiles';

export const Details = () => {
  return (
    <div className="m-auto" style={{ width: '400px' }}>
      <span className="fw-bold fs-5 mx-auto">Informacion de empresa</span>
      <div className="mt-4 text-nowrap">
        <div className="d-flex py-1">
          <span className="w-50">NIT</span>
          <span className="w-50">{users[0].document}</span>
          <NavLinkEdit className={'ms-2'}>
            <i className="bi bi-pencil-fill px-2"></i>
          </NavLinkEdit>
        </div>
        <div className="d-flex py-1">
          <span className="w-50">Pagina Web</span>
          <span className="w-50">companyWeb.com.co</span>
          <NavLinkEdit className={'ms-2'}>
            <i className="bi bi-pencil-fill px-2"></i>
          </NavLinkEdit>
        </div>
        <div className="d-flex py-1">
          <span className="w-50">Camara y comercio</span>
          <span className="w-50">doc.pdf</span>
          <NavLinkEdit className={'ms-2'}>
            <i className="bi bi-pencil-fill px-2"></i>
          </NavLinkEdit>
        </div>

        <BtnSubmitStyled className="w-100 mt-4">Confirmar</BtnSubmitStyled>
      </div>
    </div>
  );
};
