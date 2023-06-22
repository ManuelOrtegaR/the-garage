import { Route, Routes } from 'react-router-dom';

import { Login } from '../auth';
import { TheGarageRoutes } from '../thegarage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<TheGarageRoutes />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
