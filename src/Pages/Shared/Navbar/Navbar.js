import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';



const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);


    // logOut function:
    const handleLogOutUser = () =>{
      logOut()
      .then(()=>{})
      .catch(err => console.log(err));

    }


  

    const navbarItems = <React.Fragment>
        
            <li><Link className='font-bold' to="/">Home</Link></li>
            <li><Link className='font-bold' to="/blogs">Blogs</Link></li>

            {
                  user?.uid ?
                  <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button
                    onClick={handleLogOutUser}
                     className='font-bold'>Log Out</button></li>
                  </>
                  :
                  <li><Link to="/login" className='font-bold'>Login</Link></li>
            }

    </React.Fragment>


    return (
        <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            {navbarItems}

            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Old Books</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">

          {navbarItems}
          
          </ul>
        </div>

        <label htmlFor="dashboard" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
       
      </div>
    );
};

export default Navbar;