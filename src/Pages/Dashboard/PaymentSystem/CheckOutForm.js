import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';



const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmitBtn = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return 
        }
    }

    return (
           <>
            <form onSubmit={handleSubmitBtn}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      
    </form>
    <p className='text-red-600'></p>
       
      </>
  
    );
};

export default CheckOutForm;