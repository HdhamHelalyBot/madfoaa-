import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* FIX: Wrap the App component with AppProvider. This resolves the TypeScript error by providing the required 'children' prop and makes the application context available to all components within App. */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);