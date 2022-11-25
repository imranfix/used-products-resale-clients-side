import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';




const SignUp = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState(''); //signUp error state


    const hanldeSignUp = (data) =>{
        console.log(data);
        setSignUpError('');

        // Create user Function:
        createUser(data.email, data.password)
        .then(result => {
           const user = result.user;
           console.log(user);
           toast(' Created new User Successfully done')

           const userInfo = {
                displayName: data.name
           } 

           updateUser(userInfo)
           .then( () =>{
            // navigate('/');
           })
           .catch(err => console.error(err));
        })

        .catch(err => {
            console.error(err)
            setSignUpError(err.message)
        });
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
        <div className='h-[720px] mt-8 mb-8 flex justify-center items-center  bg-base-100 shadow-xl'>
        <div className='w-96 p-7 me-8'>
            <h2 className='text-xl text-center'>Sign Up</h2>

    <form onSubmit={handleSubmit(hanldeSignUp)}>
        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Name</span></label>
            <input type="text" {...register("name",{
                required: "Name is required"
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Email</span></label>
            <input type="text" {...register("email",
            {
                required: true
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs mb-3">
             <label className="label"><span className="label-text">Password</span></label>
            <input type="password" {...register("password", {
                required: "password is required",
                minLength: {value: 6, message: "Password must be 6 Character longer "},
                pattern: {value: /(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,})/, message: 'Password must have uppercase, number and special character'
            }
            })}
             className="input input-bordered w-full max-w-xs" />
             {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>

        <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
        {signUpError && <p className='text-red-500'>{signUpError}</p>}
    </form>
            
    <p>Already have an account <Link className="text-secondary" to="/login">Please Login</Link></p>
    <div className="divider">OR</div>
    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full mb-3'> GOOGLE</button>
        </div>

     </div>
    );
};

export default SignUp;