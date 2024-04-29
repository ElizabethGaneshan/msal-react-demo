import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

import { EventType, PublicClientApplication } from "@azure/msal-browser";

const pca = new PublicClientApplication({
  auth: {
    // clientId: "482f7284-f662-4f46-8094-ff53becf6cad", // get it from msal-react-demo (overiew/ application id)
    // authority:
    //   "https://login.microsoftonline.com/b35b51f3-994b-4ff8-85d5-ef6995f6121d", // (overiew / (Endpoints /OAuth 2.0 authorization endpoint (v2)))
    // redirectUri: "/",
    // instance: "https://login.microsoftonline.com/",
    // tenantId: "b35b51f3-994b-4ff8-85d5-ef6995f6121d",
    // clientId: "cba85205-493e-4608-9ba2-1c4bd8b73702",
    // redirectUri: "/",
    clientId: "cba85205-493e-4608-9ba2-1c4bd8b73702",
    authority:
      "https://login.microsoftonline.com/b35b51f3-994b-4ff8-85d5-ef6995f6121d",
    redirectUri: "/",
  },
  // cache: {
  //   cacheLocation: "sessionStorage",
  // },
});

pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    console.log(event);
    pca.setActiveAccount(event.payload.account);
  }
  if (event.eventType === EventType.ACQUIRE_TOKEN_START) {
  pca.acquireTokenSilent(event.payload.accessToken)
  } 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App msalInstance={pca} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
