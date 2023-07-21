import { Navigate, Route, Routes } from 'react-router-dom';
import { MessagesId, OrderId, PasswordUpdate } from '../../profiles';
import { Messages } from '../Messages';
import { users } from '../TestProfiles';
import { Orders } from '../Orders';

export const ProfilesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="change-pws" element={<PasswordUpdate />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/id" element={<MessagesId />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/id" element={<OrderId />} />
        <Route
          path="/"
          element={
            <Navigate
              to={
                users[0].type === 'client'
                  ? 'change-pws'
                  : users[0].type === 'company'
                  ? 'details'
                  : 'request'
              }
            />
          }
        />
      </Routes>
    </>
  );
};
