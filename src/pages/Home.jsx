import Typography from "@mui/material/Typography";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
// import Form from "../components/Form";

export const Home = ({ axiosApi }) => {
  return (
    <>
      <AuthenticatedTemplate>
        <div style={{ color: "green" }}>Successfully signed in</div>
        {/* <Form axiosApi={axiosApi} /> */}
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Typography variant="h6" style={{ color: "red" }}>
          Please sign-in to see your profile information.
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
};