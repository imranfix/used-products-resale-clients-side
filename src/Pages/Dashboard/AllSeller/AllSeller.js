import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import SellerCard from './SellerCard';

const AllSeller = () => {

    const [deleteProduct, setDeleteProduct] = useState(null);

    const {data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () =>{

            try{
                const res = fetch('http://localhost:5000/sellers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await (await res).json();
                refetch();
                return data;
            }
            catch(error){

            }
        }
    });



    
    // delete product function:
    const handleDeleteProdcut = (seller) =>{
        fetch(`http://localhost:5000/sellers/${seller._id}`, {
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.deletedCount > 0 ){
                refetch();
                toast.success(`Selling ${seller.product} books is Delete now Successfully.`)
              
            }
        })
    }




    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }



    return (
        <div>
            <h3 className='text-2xl mt-2 '>Add Product: {sellers?.length}</h3>       
                <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-2 gap-8'>
                { 
                    sellers &&
                    sellers?.map(seller => <SellerCard
                    key={seller._id}
                    seller={seller}
                    handleDeleteProdcut={handleDeleteProdcut}
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                    ></SellerCard>)
                }  

                    </div>   
                    
        </div>
    );
};

export default AllSeller;