import Button from '@mui/material/Button';

import { useMsal } from '@azure/msal-react';

export const SignInButton = () => {

    const { instance } = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect({
          //   scopes: ["user.read"],
          scopes: [
            "api://cba85205-493e-4608-9ba2-1c4bd8b73702/ReadUserDataScope",
          ],
        });
    };

    return (
        <Button color="inherit" onClick={handleSignIn}>Sign in</Button>
    )
};