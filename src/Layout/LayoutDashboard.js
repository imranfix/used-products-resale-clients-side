import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';



const LayoutDashboard = () => {

  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)

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
    <ul className="menu p-4 w-80  text-base-content">
      <li><Link to="/dashboard/buyer" className='mb-3'> Buyer </Link></li>
      <li><Link to="/dashboard/allseller" className='mb-3'> Seller </Link></li>
      <li><Link to="/dashboard/addProducts" className='mb-3'> Add Products </Link></li>
        {

          isAdmin &&  <>
              <li><Link to="/dashboard/alluser" className='mb-3'>Admin Control </Link></li>
          </>
          
        }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default LayoutDashboard;