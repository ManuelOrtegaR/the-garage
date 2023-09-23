import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Accounts,
  Details,
  Messages,
  MessagesId,
  OrderId,
  Orders,
  PasswordUpdate,
  Products,
  Requests,
  Services,
} from '../../profiles';
import { ProductsForm, ServicesForm } from '../../products';
import { useContext } from 'react';
import { AuthContext } from '../../../../auth/context/AuthContext';

export const ProfilesRoutes = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="change-pws" element={<PasswordUpdate />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:id" element={<MessagesId />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderId />} />
        <Route path="details" element={<Details />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductsForm />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element={<ServicesForm />} />
        <Route path="requests" element={<Requests />} />
        <Route path="accounts" element={<Accounts />} />
        <Route
          path="/"
          element={
            <Navigate
              to={
                user.userClass === 'client'
                  ? 'change-pws'
                  : user.userClass === 'company'
                  ? 'details'
                  : 'requests'
              }
            />
          }
        />
      </Routes>
    </>
  );
};
