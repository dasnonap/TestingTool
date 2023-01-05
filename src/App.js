import './App.scss';
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
	let className = 'main';

	if( useLocation().pathname.search( 'dashboard' ) >= 0 ){
		className += ' main--alt';
	}

	return (

		<div className={className} id="main">
			<Outlet /> 
		</div>
	);
};

export default App;
