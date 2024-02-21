import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'; // GILA GILA WILMER YG MIKIR SENDIRI NIH NICEEE
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue(); // GILA GILA WILMER YG MIKIR SENDIRI NIH NICEEE

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
            <>
                <p>
                    {/* Part of the homework */}
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button>
            <Link to='/payment'>
                Proceed to checkout
            </Link>
        </button>
    </div>
  )
}

export default Subtotal