
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider,QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>  
   <QueryClientProvider client={queryClient}>
     <App />
     </QueryClientProvider>
    </Provider>
);

;
