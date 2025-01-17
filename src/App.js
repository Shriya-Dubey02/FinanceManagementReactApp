import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Charts from './components/Analysis/Charts';
import Budgets from './components/Budgets/Budgets';
import Register from './components/Register/Register';
import Login from './components/Login/Login';



const routes=createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>
  },
  {
    path:"/analysis",
    element:<><Navbar/><Charts/></>
  },
  {
    path:"/budgets",
    element:<><Navbar/><Budgets/></>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
  path:"/login",
  element:<Login/>
  }
])
function App() {
  return (
    <div className="">
      
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
