import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';



const CheckOutForm = ({bookings}) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const {price, name, phone, location } = bookings;

    useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              // authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({ price }),
      })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
  }, [price]);



    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return ;
        }

        const card = elements.getElement(CardElement);
        if(card === null ){
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if(error){
          console.log(error);
          setCardError(error.message);
        }
        else{
          setCardError('');
        }

        setSuccess('');

        const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: price,
              },
            },
          },
        );

        if(confirmError){
          setCardError(confirmError.message);
          return;
        }
        if(paymentIntent.status === "succeeded"){
         setSuccess('congratulations your payment is completed');
         setTransactionId(paymentIntent.id);
        }
       


    }

    return (
           <>
            <form onSubmit={handleSubmit}>
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

  <button className='btn btn-sm btn-info mt-4' type="submit" disabled={!stripe || !clientSecret}>Pay</button>

    </form>
        <p className="text-red-400">{cardError}</p>
        {
          success && <div>
            <p className='text-orange-400'>{success}</p>
            <p>Your TransactionId: <span className='font-bold'>{transactionId}</span></p>
          </div>
        }
      </>
  
    );
};

export default CheckOutForm;