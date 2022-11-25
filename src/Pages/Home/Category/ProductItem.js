import React from 'react';

const ProductItem = ({product}) => {
    const {picture, location, name, yearsOfUse, resale_price, original_price, posted, sellersName } = product;

    return (
        <div className="card card-compact w-76 bg-base-100 shadow-xl mt-8 mb-8">
            <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title text-2xl text-slate-600"> Books:  {name}</h2>
                <p className='font-bold'> Seller Name: {sellersName}</p>
                <p className='font-bold'>Posted Time: {posted}</p>
                <p className='font-bold'> Resale Price: {resale_price}</p>
                <p className='font-bold'>Original Price: {original_price}</p>
                <p className='font-bold'>Uses: {yearsOfUse}</p>
                <p className='font-bold'> Location: {location}</p>
            <div className="card-actions justify-end">
        <button className="btn btn-info">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductItem;