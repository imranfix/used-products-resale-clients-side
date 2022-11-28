import { Result } from 'postcss';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom';



const AddProducts = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const imageHostKey= process.env.REACT_APP_imgbb_Key
    // console.log(imageHostKey)

    const navigate = useNavigate();
   
    const handleAddProduct = data =>{
        console.log(data);
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
           if(imgData.success){
            // console.log(imgData.data.url);
            const seller = {
               
                image: imgData.data.url,
                condition: data.condition,
                mobile: data.mobile,
                product: data.product,
                price: data.price,
                location: data.location,        

            }


            fetch('https://second-hand-books-server.vercel.app/sellers', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },

                body: JSON.stringify(seller)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result)
                toast.success(' Add Product Information Successfully')
                navigate('/dashboard/allseller')
               
            })

           }
        })



       
    }   




    return (
        <div>
             <h3 className="text-2xl mt-2">Add products</h3>
             
             <div className='w-76 p-7'>                
        <form onSubmit={handleSubmit(handleAddProduct)}>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Product Name</span></label>
            <input type="text" {...register("product",{
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.product && <p className='text-red-500'>{errors.product.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Price</span></label>
            <input type="text" {...register("price",{
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
        </div>

      

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Condition Type</span></label>
            <input type="text" {...register("condition",{
            })}  className="input input-bordered w-full max-w-xs" placeholder='excellent, good or fair' />
            {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
            
        </div>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Mobile Number</span></label>
            <input type="text" {...register("mobile",{
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">location</span></label>
            <input type="text" {...register("location",{
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Description</span></label>
            <input type="text" {...register("description",{
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">Year of Use</span></label>
            <input type="text" {...register("year of purchase",{
            })}  className="input input-bordered w-full max-w-xs" />
            {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
             <label className="label"><span className="label-text">product image</span></label>
            <input type="file" {...register("image",{
            })}  className="input input-bordered w-full max-w-xs" placeholder='excellent, good or fair' />
            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            
        </div>
        

        <input className='btn btn-accent mt-2' value="Submit" type="submit" />
    </form>
        </div>
        </div>
    );
};

export default AddProducts;