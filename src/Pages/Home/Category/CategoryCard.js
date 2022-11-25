import React from 'react';
import { Link } from 'react-router-dom';



const CategoryCard = ({category}) => {
    const {img, name, id} = category;



    return (
        <div className="card card-compact w-76 bg-base-100 shadow-xl mt-8">
            <Link to={`/category/${id}`}>
            <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
            </Link>
      </div>
    );
};

export default CategoryCard;