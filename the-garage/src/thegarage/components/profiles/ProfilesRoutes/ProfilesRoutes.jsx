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
  Questions,
  QuestionId,
} from '../../profiles';
import { ProductsForm } from '../../products';
import { useContext } from 'react';
import { AuthContext } from '../../../../auth/context/AuthContext';
import { RequestsId } from '../RequestsId';

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
        <Route path="products/add" element={<ProductsForm />} />
        <Route path="products/:id" element={<ProductsForm />} />
        <Route path="requests" element={<Requests />} />
        <Route path="requests/:id" element={<RequestsId />} />
        <Route path="questions/:id" element={<QuestionId />} />
        <Route path="questions/" element={<Questions />} />
        <Route path="requests/:id" element={<RequestsId />} />
        <Route path="accounts" element={<Accounts />} />
        <Route
          path="/"
          element={
            <Navigate
              to={
                user.userClass === 'Cliente'
                  ? 'change-pws'
                  : user.userClass === 'Empresa'
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
