import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

import { useStateValue } from './StateProvider'; // GILA GILA WILMER YG MIKIR SENDIRI NIH NICEEE

//logout logic
import { getAuth, signOut } from 'firebase/auth';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue(); // GILA GILA WILMER YG MIKIR SENDIRI NIH NICEEE
  
  const logInOrOut = () => {
    if(user){
      dispatch({
        type: 'SET_USER',
        user: null,
      })
      // logout
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        alert(error)
      });
    }
  }

  return (
    <div className='header'>
        <Link to="/">
          <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
        
        <div className='header__search'>
          <input className='header__searchInput' type='text' />
          <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
          <Link to={user? "" : "/login"}>
              <div onClick={logInOrOut} className='header__option'>
                <span className='header__optionLineOne'>
                  Hello, {user ? [user.email] : 'Guest'}
                </span>
                <span className='header__optionLineTwo' >
                  {user ? 'Sign Out' : 'Sign In'}
                </span>
              </div>
            </Link>

          <div className='header__option'>
            <span className='header__optionLineOne'>
              Returns
            </span>
            <span className='header__optionLineTwo'>
              & Orders
            </span>
          </div>

          <div className='header__option'>
            <span className='header__optionLineOne'>
              Your
            </span>
            <span className='header__optionLineTwo'>
              Prime
            </span>
          </div>

          <Link to="/checkout">
            <div className='header__optionBasket'>
              <ShoppingBasketIcon></ShoppingBasketIcon>
              <span className='header__optionLineTwo header_basketCount'>{basket?.length}</span>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header