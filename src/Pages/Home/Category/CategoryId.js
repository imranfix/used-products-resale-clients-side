import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ProductItem from './ProductItem';



const CategoryId = () => {
    // const categoryList = useLoaderData();
    // const {name} = categoryList;
    const [products, setProducts] = useState([]);
    const [books, setBooks] = useState(null);

    // use tanstack query:
    // const {data: products = []} = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async() =>{
    //         const res = await fetch('http://localhost:5000/products').then(res => res.json())
    //         const data = await res.json();
    //         return data;
    //     }
    // })


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
                    setBooks={setBooks}
                    ></ProductItem>)
                }
            </div>
                 
                 {
                        books &&
                      <BookingModal
                      books={books}
                      setBooks={setBooks}
                      ></BookingModal>
   
                 }
                  
        </div>
    );
};

export default CategoryId;