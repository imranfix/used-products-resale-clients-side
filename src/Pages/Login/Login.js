import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const Login = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    // Error State:
    const [userloginError, setUserLoginError] = useState('');


    // 1. handle login function:
    const handleLoginForm = data =>{
        console.log(data);
        setUserLoginError('');
        
    // SignIn Function:
     signIn(data.email, data.password)
     .then(result => {
        const user = result.user;
        console.log(user);
    // setLoginUserEmail(data.email);
     })
     .catch(err => {
        console.error(err.message)
        setUserLoginError(err.message)
     })   
        
    }

    // Google signIn:
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }


    return (
        <div className='h-[700px] mt-8 mb-8 flex justify-center items-center bg-base-100 shadow-xl'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLoginForm)}>
                <div className="form-control w-full max-w-xs">
                 <label className="label"><span className="label-text">Email</span></label>
                <input type="text" {...register("email", {required: "Email Address is required in this field"})} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                 <label className="label"><span className="label-text">Password</span></label>
                <input type="password" {...register("password", {required: "Password is required in this field",
                minLength: { value: 6, message: "password must be 6 character longer for security"},
                })} className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                <label className="label"><span className="label-text">Forget Password?</span></label>
            </div>

      <input className='btn btn-accent w-full' value="Login" type="submit" />

          <div>
                { userloginError && <p className='text-red-700'>{userloginError}</p>}
            </div>      

    </form>
        <p>New to Buy Old Books <Link className="text-secondary" to="/signup">create a new account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'> GOOGLE</button>
            </div>

         </div>
    );
};

export default Login;