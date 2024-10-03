
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Rutas from './Routes/Rutas';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import useStoreTema from './Store/TemaApp';
const queryClient = new QueryClient();


function App() {
  // importo los estados para el tema
  const {estilosTema}= useStoreTema();
  return (
    <ThemeProvider theme={estilosTema}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles/>
        <Rutas/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
