import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import  "./index.css";
import { App } from './components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants';

const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
    <ThemeProvider theme= {theme}>
      <App />
    </ThemeProvider>
    
  </StrictMode>
);