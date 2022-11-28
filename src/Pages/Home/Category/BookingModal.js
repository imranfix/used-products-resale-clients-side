import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';



const BookingModal = ({books, setBooks}) => {
    const {name, location, yearsOfUse, resale_price, sellersName} = books;

    const {user} = useContext(AuthContext);

    const handleBookingBook = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const books = form.books.value;
      const location = form.location.value;
      const price = form.price.value;
      const phone = form.phone.value;

      const bookingInfo = {
        name,
         email,
          books,
           location,
            price, phone
      }

      // 
      // 
      // 
      // console.log(bookingInfo);
      // setBooks(null)
      
      fetch('https://second-hand-books-server.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(bookingInfo)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if (data.acknowledged){
          setBooks(null);
          toast.success('Buyers Booking is Confirmed Now')
        }
     
      })

    }

    return (

        <div>
                <input type="checkbox" id="booking-modal-book" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal-book" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center">{name}</h3>

        <form onSubmit={handleBookingBook} className='grid grid-cols-1 gap-2 mt-8'>

        <input name="name" type="text" placeholder="user name" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
        <input name="email" type="email" placeholder="email address" defaultValue={user?.email} disabled className="input w-full input-bordered" />
        <input name="books" type="text" disabled value={name} placeholder="Books name" className="input w-full input-bordered" />
        <input name="price" type="text" placeholder="Item price" disabled value={resale_price}  className="input w-full input-bordered" />
        <input name="phone" type="text" placeholder="phone number" className="input w-full input-bordered" />
        <input name="location" type="text" placeholder="meeting location" className="input w-full input-bordered" />
         <br />
        <input className='w-full max-xs btn btn-info' type="submit" value="Submit" />
        </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;