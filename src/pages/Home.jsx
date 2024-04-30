import Typography from "@mui/material/Typography";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { useEffect, useState } from "react";

export const Home = ({ axiosApi }) => {
  const { instance } = useMsal();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const currentAccount = instance.getActiveAccount();

    if (currentAccount) {
      setUserName(currentAccount.username);
    }
  }, [instance]);


  console.log(localStorage.getItem("Token"));
  return (
    <>
      <AuthenticatedTemplate
        style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">
          Successfully signed in <div style={{color:"green",fontSize:"30px"}}>{userName}</div>
        </Typography>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Typography variant="h6" style={{ color: "red" }}>
          Please sign-in to see your profile information.
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
};


