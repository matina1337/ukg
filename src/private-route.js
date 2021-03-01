import React from 'react';
import {Route} from "react-router-dom";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import Home from './views/Home';

const PrivateRoute = ({component, ...args}) => (
	<Route
		component = {withAuthenticationRequired(component, {
			onRedirecting: () => <Home />,
		})}

		{...args}
	/>
)

export default PrivateRoute;