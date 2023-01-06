import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./components/Layouts/Login";
import Register from "./components/Layouts/Register";
import Home from "./components/Layouts/Home";
import Dashboard from "./components/Layouts/Dashboard";
import AuthService from './services/auth.service';
import Results from './components/Sections/Results';
import {
	createBrowserRouter,
	RouterProvider,
	redirect,
} from "react-router-dom";
import Sites from './components/Layouts/Sites';

const router =  new createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/signup',
				element: <Register />,
			},
			{
				path: '/signin',
				element: <Login />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
				children: [
					{
						path: '/dashboard/sites',
						element: <Sites />
					},
					{
						path: '/dashboard/results',
						element: <Results />
					}
				],
				loader: async () => {
					const userToken = AuthService.getCurrentUser();
					
					if ( ! userToken ) {
						return redirect("/signin");
					}

					if( ! AuthService.validateUser( userToken ) ){
						return redirect( '/signin' );
					}
					return true;
				}
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
