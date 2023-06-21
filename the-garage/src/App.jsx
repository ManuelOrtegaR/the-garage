import './App.css';
import ClientProfile from './layouts/ClientProfile';
import { Home } from './layouts/Home';
import ItemList from './layouts/ItemList';
import Login from './layouts/login';


import SingUp from "./layouts/SingUp";

import { FooterComponent } from "./layouts/components/FooterComponent";
import { NavComponent } from "./layouts/components/NavComponent";


function App() {
  return (
    <>
      <NavComponent />
      <Home />
      <ItemList />
      <ClientProfile />
      <FooterComponent />
    </>
  );
}

export default App;
