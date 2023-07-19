import { Navigate, Route, Routes } from "react-router-dom";
import { FooterComponent, NavComponent } from "../../ui/pages";
import {
  ChangePassword,
  Orders,
  Messages,
} from "../components/profiles/pages/client";
import {
  ClientProfile,
  Contact,
  Home,
  ItemList,
  ProductDetail,
  ShoppingCart,
  Chat,
  ServicesPage,
  ServicesDetail,
} from "../pages";

export const TheGarageRoutes = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="productos" element={<ItemList />}></Route>
        <Route path="productDetail/:id" element={<ProductDetail />}></Route>
        <Route path="servicios" element={<ServicesPage />}></Route>
        <Route path="shoppingCart" element={<ShoppingCart />}></Route>
        <Route path="contacto" element={<Contact />}></Route>
        <Route path="profile" element={<ClientProfile />}></Route>
        <Route path="servicesDetail/:id" element={<ServicesDetail />}></Route>
        {/* <Route path="profile/change-pws" element={<ChangePassword />}></Route>
        <Route path="profile/orders" element={<Orders />}></Route>
        <Route path="profile/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="profile/messages" element={<Messages />}></Route> */}
        <Route path="chat" element={<Chat />}></Route>
        <Route path="/" element={<Navigate to={"home"} />}></Route>
      </Routes>
      <FooterComponent />
    </>
  );
};
