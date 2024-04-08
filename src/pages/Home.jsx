import Typography from "@mui/material/Typography";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Form from "../components/Form";

export const Home = () => {
  return (
    <>
      <AuthenticatedTemplate>
        {/* <Typography variant="h6">
          You are signed-in. Select profile to call Microsoft Graph.
        </Typography> */}
        <Form /> 
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Typography variant="h6">
          Please sign-in to see your profile information.
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
};