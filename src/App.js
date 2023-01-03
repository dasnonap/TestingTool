import './App.scss';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main" id="main">
        <Outlet /> 
    </div>
  );
}

export default App;
