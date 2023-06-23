import { Navigate, Route, Routes } from "react-router-dom";
import { FooterComponent, NavComponent } from "../../ui/pages";
import { ClientProfile, Home, ItemList } from "../pages";
import { ProductDetail } from "../pages/ProductDetail";
import { ShoppingCart } from "../pages/ShoopingCart";

export const TheGarageRoutes = () => {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="productos" element={<ItemList />}></Route>
        <Route path="productDetail" element={<ProductDetail />}></Route>
        <Route path="shoopingCart" element={<ShoppingCart />}></Route>
        <Route path="profile" element={<ClientProfile />}></Route>
        <Route path="/" element={<Navigate to={"home"} />}></Route>
      </Routes>
      <FooterComponent />
    </>
  );
};
