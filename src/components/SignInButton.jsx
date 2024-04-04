import Button from '@mui/material/Button';

import { useMsal } from '@azure/msal-react';

export const SignInButton = () => {

    const { instance } = useMsal();
    
    return (
        <Button color="inherit">Sign in</Button>
    )
};