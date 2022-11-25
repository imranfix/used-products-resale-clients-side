import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';



const CategoryId = () => {
    // const categoryList = useLoaderData();
    // const {name} = categoryList;
    const [products, setProducts] = useState([]);


    useEffect(  () =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])



    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products?.map(product => <ProductItem
                    key={product._id}
                    product={product}
                    ></ProductItem>)
                }
            </div>
                
        </div>
    );
};

export default CategoryId;