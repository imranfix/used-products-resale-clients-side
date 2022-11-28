import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {

    const {data: buyerUsers=[], refetch} = useQuery({
        queryKey: ['buyerUsers'],
        queryFn: async () => {
            const res = await fetch('https://second-hand-books-server.vercel.app/buyerUsers');
            const data = await res.json();
            return data;
        }
    });

    // handle Admin function:
    const handleAdmin = id =>{
        fetch(`https://second-hand-books-server.vercel.app/buyerUsers/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0 )
            toast.success('Create Admin Successfully')
            refetch();
        })
    }


    return (
        <div>
            <h3 className='text-2xl mt-3'>Add Product</h3>
            <div className="overflow-x-auto mt-8">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
            {
                buyerUsers?.map((users, index) => 
                <tr key={users._id}>
                <th>{index+1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td> { users?.role !== 'admin' && <button onClick={()=> handleAdmin(users._id)} className='btn btn-xs btn-info'> Make Admin</button> }</td>
                <td><button className='btn btn-xs btn-warning'>Delete</button></td>
              </tr>

                    )
            }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;