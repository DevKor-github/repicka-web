import '@stackflow/plugin-basic-ui/index.css';
import '@/index.css';
import 'mingcute_icon/font/Mingcute.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
