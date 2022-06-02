import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { TransactionProvider } from './context/TransactionContext';

const root = document.getElementById('root') as Element;
ReactDOM.createRoot(root).render(
  <GoogleReCaptchaProvider
    reCaptchaKey="6Lc1kjUgAAAAAD3ngfU-w1moCD0GHdtkv17Ux06D"
    scriptProps={{
      async: false, // optional, default to false,
      defer: false, // optional, default to false
      appendTo: 'head', // optional, default to "head", can be "head" or "body",
      nonce: undefined // optional, default undefined
    }}
  >
  <TransactionProvider>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </TransactionProvider>
  </GoogleReCaptchaProvider>,
);
