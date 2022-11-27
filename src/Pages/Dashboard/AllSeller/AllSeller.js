import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

       
    const url = 'http://localhost:5000/seller'

    const { data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            });
            const data = await res.json();
            return data;
        }
    })
    




    return (
        <div className='w-76 p-7'>
            <h3 className='text-2xl mt-2 '>Add Product</h3>       

            {
                products.map(product => <p>{product.length}</p>)
            }      
    
        </div>
    );
};

export default AllSeller;