import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';
import './styles.css';

function TheGarageApp() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default TheGarageApp;
