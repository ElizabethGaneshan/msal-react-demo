import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import { EventType } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { useEffect, useState } from "react";

function App({ msalInstance }) {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    msalInstance.addEventCallback((e) => {
      if (e.eventType === EventType.LOGIN_SUCCESS) {
        msalInstance.setActiveAccount(e.payload.account);
        // console.log(
        //   setAccessToken(e.payload.accessToken),
        //   "from APP useEffect"
        // );
        console.log(e);
        setAccessToken(e.payload.accessToken);
        localStorage.setItem("accessToken", e.payload.accessToken);
      }
    });
  });

  return (
    <MsalProvider instance={msalInstance}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages accessToken={accessToken} />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

const Pages = ({ accessToken }) => {
  return (
    <Routes>
      <Route path="/" element={<Home accessToken={accessToken} />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
