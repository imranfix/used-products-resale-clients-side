import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise)

const PaymentSystem = () => {
    const bookings = useLoaderData();


    return (
        <div>
                <h3 className='text-2xl mt-2'>Payment for {bookings.books} books.</h3>
                <div className="card w-full bg-neutral text-neutral-content mt-4">
  <div className="card-body text-center">
            <h3 className='text-xl'>Please Pay <strong className='text-info'>${bookings.price}</strong> for your booking.</h3>
  </div>
</div>      
            <div className=' w-96 mt-8 '>
                  
        <Elements stripe={stripePromise}>
            <CheckOutForm
            bookings={bookings}
             />
        </Elements>
            </div>
        </div>
    );
};

export default PaymentSystem;