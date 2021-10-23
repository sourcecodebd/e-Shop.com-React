import { Skeleton, Typography } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { firebase } = useAuth();
    const { user, isLoading } = firebase;

    // prevent returning to Login using Loading if initial user value is null / {}
    if (isLoading) {
        return (
            <Typography variant="h1">
                <Skeleton style={{ minHeight: '45vh' }} />
            </Typography>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.email || user.displayName) ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    >

                    </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;