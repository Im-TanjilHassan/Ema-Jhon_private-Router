import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {

    const { user } = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) => user.uid ? children : <Redirect
                to={{
                    pathname: "/log-in",
                    state: { from: location }
                }}
            ></Redirect>}>
        </Route>
    );
};

export default PrivateRouter;