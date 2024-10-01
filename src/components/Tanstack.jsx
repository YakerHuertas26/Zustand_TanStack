import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Rutas from '../rute/Rutes';



const queryClient = new QueryClient();

const Tanstack = () => {
    
    return (
        <QueryClientProvider client={queryClient}>
            <Rutas/>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
};

export default Tanstack;
