import { Navigate, Route, Routes } from 'react-router-dom';
import { FooterComponent, NavComponent } from '../../ui/pages';
import { ClientProfile, Home, ItemList } from '../pages';

export const TheGarageRoutes = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="productos" element={<ItemList />}></Route>
        <Route path="profile" element={<ClientProfile />}></Route>
        <Route path="/" element={<Navigate to={'home'} />}></Route>
      </Routes>
      <FooterComponent />
    </>
  );
};
