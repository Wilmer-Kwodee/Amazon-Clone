import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './reducer'

function Payment() {
    const [{basket}] = useStateValue()  

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
                <p>Indonesia, Java Island</p>
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
                <p>Card details</p>
                <input />
                <h3>Order Total: ${getBasketTotal(basket)}</h3>
            </div>
        </div>
    </div>
  )
}

export default Payment