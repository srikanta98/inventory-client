import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Addall from './Pages/AddService/Addall';
import Blog from './Pages/Home/Blog/Blog';


import Home from './Pages/Home/Home/Home';
// import Secondsection from './Pages/Home/Secondsection/Secondsection';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

import ManageServices from './Pages/ManageServices/ManageServices';
import Order from './Pages/Order/Order';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        
       
       
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
           <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path="/manageall" element={
          <RequireAuth>
           <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>
        <Route path="/addall" element={
          <RequireAuth>
            <Addall></Addall>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        {/* <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes> */}
{/*       
      <Footer></Footer> */}
      <ToastContainer />
    </div>
  );
}

export default App;
