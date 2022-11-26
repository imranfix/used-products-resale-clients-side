import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {

    const {data: buyerUsers=[], refetch} = useQuery({
        queryKey: ['buyerUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyerUsers');
            const data = await res.json();
            return data;
        }
    });

    // handle Admin function:
    const handleAdmin = id =>{
        fetch(`http://localhost:5000/buyerUsers/admin/${id}`,{
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
            <h3 className='text-2xl'>All Users</h3>
            <div className="overflow-x-auto mt-8">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
      </tr>
    </thead>
    <tbody>
            {
                buyerUsers?.map((users, index) => 
                <tr key={users._id}>
                <th>{index+1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td> { users?.role !== 'admin' && <button onClick={()=> handleAdmin(users._id)} className='btn btn-xs btn-info'>Admin</button> }</td>
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