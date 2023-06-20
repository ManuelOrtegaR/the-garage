import "./App.css";
import { Home } from "./layouts/Home";
import ItemList from "./layouts/ItemList";

import SingUp from "./layouts/SingUp";
import Login from "./layouts/login";

import { FooterComponent } from "./layouts/components/FooterComponent";
import { NavComponent } from "./layouts/components/NavComponent";


function App() {
  return (
    <>
      <NavComponent />
      <Home />
      <ItemList />
      <FooterComponent />
    </>
  );
}

export default App;
