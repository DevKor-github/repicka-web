import '@/index.css';
import 'mingcute_icon/font/Mingcute.css';

import { createRoot } from 'react-dom/client';

import App from '@/App';
import { BrowserRouter } from 'react-router';

// TODO: BASE_URL 추후 수정
createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.VITE_BASE_URL || ''}>
    <App />
  </BrowserRouter>,
);
