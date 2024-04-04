import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";


import { PublicClientApplication } from "@azure/msal-browser";

const pca = new PublicClientApplication({
  auth: {
    clientId: "482f7284-f662-4f46-8094-ff53becf6cad", // get it from msal-react-demo (overiew/ application id)
    authority:
      "https://login.microsoftonline.com/b35b51f3-994b-4ff8-85d5-ef6995f6121d", // (overiew / (Endpoints /OAuth 2.0 authorization endpoint (v2)))
    redirectUri: "/",
  },
});

function App() {
    return (
        <PageLayout>
            <Grid container justifyContent="center">
                <Pages />
            </Grid>
        </PageLayout>
    );
}

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default App;
