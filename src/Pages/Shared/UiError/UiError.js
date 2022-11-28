import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const UiError = () => {
    const {logOut} = useContext(AuthContext);

    const error = useRouteError();
    const navigate = useNavigate()
    const handleLogOut = () =>{
        logOut()
        .then( () =>{
          navigate('/login')
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Connection problem or can not find data</h2>
    <p className='text-yellow-600'>{error.statusText || error.message}</p>
    <h3>Please <button onClick={handleLogOut}>Log out</button> and login back.</h3>
 
  </div>
</div>
    );
};

export default UiError;