import './styles.css';
import { ItemList, Home, ClientProfile } from './thegarage/';
import { FooterComponent, NavComponent } from './ui';

function TheGarageApp() {
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

export default TheGarageApp;
