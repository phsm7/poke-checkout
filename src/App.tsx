import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import Global from './styles/global';
import theme from './styles/theme';
import AppProvider from 'context/appProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AppRoutes />
        <Global />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
