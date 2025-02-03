import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Charts from './components/Analysis/Charts';
import Budgets from './components/Budgets/Budgets';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CategoryForm from './components/Categories/CategoryForm';
import CategoryItem from './components/Categories/CategoryItem';
import Category from './components/Categories/Category';
import NavbarHome from './NavbarHome';
import Accounts from './components/Accounts/Accounts';
import Income from './components/Incomes/Income';
import indexPage from './components/indexPage';
import HomePage from './components/HomePage';


const routes=createBrowserRouter([
  {
    path:"/Navbar",
    element:<><Navbar/><NavbarHome/></>
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
  },
  {
  path:"/category",
  element:<><Navbar/><Category/></>
  },
  {
  path:"/accounts",
  element:<><Navbar/><Accounts/></>
  },
  {
    path:"/incomes",
    element:<><Navbar/><Income/></>
  },
  {
    path:"/",
    element:<><indexPage/></>
  },
  {
    path:"/home",
    element:<HomePage/>
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
