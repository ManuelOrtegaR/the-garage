import { Navigate, Route, Routes } from 'react-router-dom';
import { FooterComponent, NavComponent } from '../../ui/pages';

import {
  Contact,
  Home,
  ItemList,
  ProductDetail,
  ShoppingCart,
  Chat,
  Profiles,
  PurchaseDetails,
} from '../pages';
import { ProtectedRoute } from '../../auth/context';

export const TheGarageRoutes = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="productos" element={<ItemList />} />
        <Route path="productos/:searchValue" element={<ItemList />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />
        <Route
          path="shoppingCart"
          element={
            <ProtectedRoute>
              <ShoppingCart />
            </ProtectedRoute>
          }
        />
        <Route path="contacto" element={<Contact />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="purchaseDetails"
          element={
            <ProtectedRoute>
              <PurchaseDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Navigate to={'home'} />} />
      </Routes>
      <FooterComponent />
    </>
  );
};
