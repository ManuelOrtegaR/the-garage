import "./App.css";
import { Home } from "./layouts/Home";
import ItemList from "./layouts/ItemList";
import { FooterComponent } from "./layouts/components/FooterComponent";
import { NavComponent } from "./layouts/components/NavComponent";
// import ItemList from './layouts/ItemList';
// import Login from './layouts/login';

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
