import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";
import "./styles.css";
import { CartProvider } from "./thegarage/store";

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
