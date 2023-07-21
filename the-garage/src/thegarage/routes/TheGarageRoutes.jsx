import { Navigate, Route, Routes } from 'react-router-dom';
import { FooterComponent, NavComponent } from '../../ui/pages';

import {
  Contact,
  Home,
  ItemList,
  ProductDetail,
  ShoppingCart,
  Chat,
  ServicesPage,
  ServicesDetail,
  Profiles,
} from '../pages';

export const TheGarageRoutes = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="productos" element={<ItemList />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="/profile/*" element={<Profiles />} />
        <Route path="servicesDetail/:id" element={<ServicesDetail />} />
        <Route path="chat" element={<Chat />} />
        <Route path="/" element={<Navigate to={'home'} />} />
      </Routes>
      <FooterComponent />
    </>
  );
};
