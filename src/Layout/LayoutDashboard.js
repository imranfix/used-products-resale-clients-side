import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';



const LayoutDashboard = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><Link to="" className='mb-3'> Buyers </Link></li>
      <li><Link to="/dashboard/allbuyers" className='mb-3'>All Buyers </Link></li>
      <li><Link to="/dashboard/alluser" className='mb-3'>All User </Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default LayoutDashboard;