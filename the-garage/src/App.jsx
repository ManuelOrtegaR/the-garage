import './App.css';
import { Home } from './layouts/Home';
import { FooterComponent } from './layouts/components/FooterComponent';
import { NavComponent } from './layouts/components/NavComponent';
// import ItemList from './layouts/ItemList';
// import Login from './layouts/login';

function App() {
  return (
    <>
      <NavComponent />
      <Home />
      <FooterComponent />
    </>
  );
}

export default App;
