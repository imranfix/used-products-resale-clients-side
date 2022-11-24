import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const Login = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    // Error State:
    const [loginError, setLoginError] = useState('');
    // const[loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);

    // // // redirect login:
    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from.pathname || '/';

    // if(token){
    //     navigate(from, { replace: true });
    // }

    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
    // SignIn Function:
     signIn(data.email, data.password)
     .then(result => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
     })
     .catch(err => {
        console.error(err.message)
        setLoginError(err.message)
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
        <div className='h-[700px] mt-8 mb-8 flex justify-center items-center card w-96 bg-base-100 shadow-xl'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                 <label className="label"><span className="label-text">Email</span></label>
                <input type="text" {...register("email", {required: "Email Address is required"})} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                 <label className="label"><span className="label-text">Password</span></label>
                <input type="password" {...register("password", {required: "Password is required",
                minLength: { value: 6, message: "password must be 6 character longer"},
                })} className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                <label className="label"><span className="label-text">Forget Password?</span></label>
            </div>

      <input className='btn btn-accent w-full' value="Login" type="submit" />

          <div>
                { loginError && <p className='text-red-500'>{loginError}</p>}
            </div>      

    </form>
        <p>New to Doctors Portal <Link className="text-secondary" to="/signup">Create New Account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

         </div>
    );
};

export default Login;