import { AppRouter } from './router/AppRouter';

import { AuthProvider } from './auth';
import { CartProvider } from './thegarage/store';

import './styles.css';

function TheGarageApp() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  );
}

export default TheGarageApp;
