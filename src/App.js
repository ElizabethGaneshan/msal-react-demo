import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import { EventType } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:5011",
  headers: { "Content-Type": "application/json" },
});

function App({ msalInstance }) {
  const { accounts } = useMsal();

  useEffect(() => {
    const callbackID = msalInstance.addEventCallback((e) => {
      if (e.eventType === EventType.LOGIN_SUCCESS) {
        msalInstance.setActiveAccount(e.payload.account);
      }
    });

    return () => msalInstance.removeEventCallback(callbackID);
  }, [msalInstance]);

  useEffect(() => {
    const accessTokenRequest = {
      scopes: ["api://cba85205-493e-4608-9ba2-1c4bd8b73702/ReadUserDataScope"],
      account: accounts[0],
    };

    //Request interceptor
    axiosApi.interceptors.request.use(async (config) => {
      const accessTokenResponse = await msalInstance.acquireTokenSilent(
        accessTokenRequest
      );

      console.log(accessTokenResponse, "accessTokenResponse");
      if (accessTokenResponse?.accessToken) {
        config.headers[
          "Authorization"
        ] = `Bearer ${accessTokenResponse.accessToken}`;
      }

      return config;
    });

    //Response interceptor
    axiosApi?.interceptors?.response?.use(
      (response) => {
        return response;
      },
      (error) => {
        const originalRequest = error.config;
        //If i have accessToken and The access token is expired
        if (error?.response?.status === 401) {
          //Request for another accessToken
          msalInstance
            .acquireTokenSilent(accessTokenRequest)
            .then((accessTokenResponse) => {
              let accessToken = accessTokenResponse.accessToken;
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + accessToken;
              return originalRequest;
            })
            .catch((e) => {
              console.log(e);
            });
        }

        return Promise.reject(error);
      }
    );
  }, [accounts, msalInstance]);

  return (
    <MsalProvider instance={msalInstance}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages axiosApi={axiosApi} />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

const Pages = ({ axiosApi }) => {
  return (
    <Routes>
      <Route path="/" element={<Home axiosApi={axiosApi} />} />
      <Route path="/profile" element={<Profile axiosApi={axiosApi} />} />
    </Routes>
  );
};

export default App;
