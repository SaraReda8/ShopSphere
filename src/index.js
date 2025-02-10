// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { QueryClient, QueryClientProvider } from 'react-query';
 import {ReactQueryDevtools} from 'react-query/devtools';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";






 let queryClient=new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
            <App />
<ReactQueryDevtools initiaIsOpen='false' position='bottom-right' />
    </QueryClientProvider>
);

