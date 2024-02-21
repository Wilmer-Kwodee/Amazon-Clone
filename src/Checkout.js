import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue(); // GILA GILA WILMER YG MIKIR SENDIRI NIH NICEEE

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
            
            <div>
                <h2 className='checkout__title'>Your shopping basket</h2>
                
                <div>
                    {basket.map(item => (
                      <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                      />
                    ))}

                    {/* Wilmer's way
                    {Array(basket?.length).fill().map((_, item) => (
                      <CheckoutProduct
                        key={item}  // Make sure to add a unique key for each element in the map function
                        id={basket[item].id}
                        image={basket[item].image}
                        title={basket[item].title}
                        price={basket[item].price}
                        rating={basket[item].rating}
                      />
                    ))} */}
                </div>
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout