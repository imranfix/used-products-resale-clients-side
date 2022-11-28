import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const SellerCard = ({seller,  setDeleteProduct, deleteProduct, handleDeleteProdcut}) => {
    // const [deleteProduct, setDeleteProduct] = useState(null);

    const ModalClose = ()=>{
        setDeleteProduct(null);
    };

    // // delete product function:
    // const handleDeleteProdcut = (seller) =>{
    //     fetch(`https://second-hand-books-server.vercel.app/sellers/${seller._id}`, {
    //         method: 'DELETE',
    //         headers:{
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //        if(data.deleteProduct > 0){
    //         refetch();
    //         toast.success(`Selling ${seller.product} Books Delete Successfully`)
    //        }
    //     })
    // }

    const {image, product, price, location, condition } = seller;


    return (
        <div className="card w-56 h-65 bg-base-100 shadow-xl">
            
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product}</h2>
          <p>Price: ${price}</p>
          <p>Condition: {condition}</p>
          <p>Location: {location}</p>
          <div className="card-actions">

          <label onClick={() => setDeleteProduct(seller)} htmlFor="confirm-modal" className="btn btn-warning  btn-sm">Delete</label>
          </div>
        </div>
        {
            deleteProduct && <ConfirmModal
            title={`Are you confirm Delete this product?`}
            message={`If you Delete ${deleteProduct.product}books.You can not get return books. `}
            ModalClose = {ModalClose}
            successAction = {handleDeleteProdcut}
            modalData = {deleteProduct}
            ></ConfirmModal>
        }
      </div>
    );
};

export default SellerCard;