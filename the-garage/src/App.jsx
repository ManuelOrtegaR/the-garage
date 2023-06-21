import './App.css';
import ClientProfile from './layouts/ClientProfile';
import { Home } from './layouts/Home';
import ItemList from './layouts/ItemList';
import Login from './layouts/login';

function App() {
  return (
    <>
      <Home />
      <Login />
      <ItemList />
      <ClientProfile />
    </>
  );
}

export default App;
