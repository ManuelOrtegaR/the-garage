import { Navigate, Route, Routes } from 'react-router-dom';
import { ChangePassword, Orders, Messages } from '../client';
import { ClientProfile } from '../../../../pages';

export const ClientRoute = () => {
  console.log('prueba');
  return (
    <>
      {/* <ClientProfile /> */}
      <Routes>
        <Route path="change-pws" element={<ChangePassword />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        {/* <Route path="profile/shopping-cart" element={<ShoppingCart />}></Route> */}
        <Route path="messages" element={<Messages />}></Route>
        <Route path="/" element={<Navigate to={'profile'} />}></Route>
      </Routes>
    </>
  );
};
