import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Material from './Material.tsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <App />
    <Material />
  </>
);