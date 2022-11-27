import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrder = () => {
    const {user} = useContext(AuthContext);



    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })



    return (
        <div>   
                <h2 className='text-2xl mt-2'>My Orders</h2>

                <div className="overflow-x-auto mt-8">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
            {
                bookings?.map((booking, index) => 
                <tr key={booking._id}>
                <th>{index+1}</th>
                <td>{booking.books}</td>
                <td>{booking.price}</td>
                <td>Blue</td>
              </tr>

                    )
            }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;