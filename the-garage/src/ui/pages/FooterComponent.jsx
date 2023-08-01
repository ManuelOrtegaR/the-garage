import { NavLink } from "react-router-dom";
import { FooterSection, NavbarStyled } from "../components";

export const FooterComponent = () => {
  return (
    <NavbarStyled>
      <div className="row mt-4 m-0">
        <FooterSection />
      </div>
      <div className="text-center text-secondary">
        © 2021 Copyright:
        <NavLink className="text-reset fw-bold" to="/home">
          thegarage.com
        </NavLink>
      </div>
    </NavbarStyled>
  );
};
