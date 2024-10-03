import './App.css'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Rutas from './Routes/Rutas';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Rutas/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
