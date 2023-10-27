/* eslint-disable react/prop-types */
import { Col, Row } from 'react-bootstrap';
import { getSessionData } from '../../api/auth';
import { clearSession, getSession } from '../../api/session';
import {
  NavLogo,
  SearchInput,
  NavMenu,
  NavbarStyled,
  LoginSpace,
} from '../components';

export const NavComponent = ({ handleSectionChange }) => {
  (async () => {
    const token = getSession();

    if (token) {
      const { data } = await getSessionData();

      if (!data) {
        clearSession();
        localStorage.removeItem('user');
      }
    }
  })();
  return (
    <>
      <NavbarStyled
        className="d-flex px-5 pt-4 justify-content-center w-100"
        style={{ minWidth: '700px' }}
      >
        <Row className="align-items-center w-100">
          <Col className="mt-3 col-12 col-md-3 ">
            <NavLogo />
          </Col>
          <Col className="mt-3 col-12 col-md-6">
            <SearchInput />
          </Col>
          <Col className="col-12 col-md-3 d-flex flex-row-reverse mt-3">
            <LoginSpace />
          </Col>
          <NavMenu handleSectionChange={handleSectionChange} />
        </Row>
      </NavbarStyled>
    </>
  );
};
