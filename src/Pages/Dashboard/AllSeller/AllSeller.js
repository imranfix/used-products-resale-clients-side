import React from 'react';
import { useForm } from 'react-hook-form';

const AllSeller = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleAddProduct = data =>{

    }


    return (
        <div className='w-76 p-7'>
            <h3 className='text-2xl mt-2 '>Add Product</h3>

                
    <form onSubmit={handleSubmit(handleAddProduct)}>
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

        

        <input className='btn btn-accent' value="Submit" type="submit" />
    </form>
        </div>
    );
};

export default AllSeller;