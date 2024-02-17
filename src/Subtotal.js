import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'; // GILA GILA WILMER YG MIKIR SENDIRI NIH NICEEE

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue(); // GILA GILA WILMER YG MIKIR SENDIRI NIH NICEEE

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
            <>
                <p>
                {/* Part of the homework */}
                Subtotal ({basket.length} items): <strong>$0</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
            )}
            decimalScale={2}
            value={0} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal