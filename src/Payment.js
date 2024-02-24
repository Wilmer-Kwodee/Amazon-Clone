import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './reducer'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Payment() {
    const [{basket}] = useStateValue()  

    const navigate = useNavigate()
    
    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            if(basket.length === 0){
                alert('stripe Cannot create payment with empty cart...');
                navigate("/");
                return;
            }

            const response = await axios({
                method: 'post',

                url: `http://127.0.0.1:5001/challenge-91ace/us-central1/api/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (event) => {
        // some fancy stripe
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then( ({paymentIntent}) => {
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            navigate("/")
        })
    }
    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }
    
  return (
    <div className='payment'>
        <div className='title'>
            <h1>Checkout ({basket?.length} items)</h1>
        </div>
        <div className='address'>
            <h3>Delivery Address</h3>
            <div className='credentials'>
                <p>user email</p>
                <p>123 Post Code</p>
                <p>Indonesia, Java Island </p>
            </div>
        </div>
        <div className='review_item'>
            <h3>Review items & delivery</h3>
            <div className='items'>
                {basket.map( item => 
                    <CheckoutProduct id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />
                )}
            </div>
        </div>
        <div className='address'>
            <h3>Payment Method</h3>
            <div className='credentials'>
                {/* <p>Card details</p> */}
                {/* <input /> */}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />

                    <h3>Order Total: ${getBasketTotal(basket)}</h3>

                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                    </button>

                    {error ? <div>{error}</div> : ''}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Payment