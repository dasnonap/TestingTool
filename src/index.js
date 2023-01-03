import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./components/Layouts/Login";
import Register from "./components/Layouts/Register";
import Home from "./components/Layouts/Home";
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Main from './components/Main';

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
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Main>
			<RouterProvider router={router} />
		</Main>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
