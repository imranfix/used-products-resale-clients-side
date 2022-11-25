import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';



const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(  () =>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])



    return (
        <div className='mt-8'>
            <h2 className='text-3xl text-center font-bold'>Category</h2>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           
            {

                categories?.map(category => <CategoryCard
                key={category._id}
                category={category}
                ></CategoryCard>)
            }
           </div>
        </div>
    );
};

export default Category;