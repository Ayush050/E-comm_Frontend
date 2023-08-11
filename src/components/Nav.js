
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// int the line where i have use terrnary operator it is checking the user is logged in or not if user is logged in then it will show the logout button otherwise it will show the signup button
const Nav = () => {

  const auth = JSON.parse(localStorage.getItem('user'));              // here it is used to check the user is logged in or not
  const navigate = useNavigate();                                           // it is used to navigate to the other page
  const logout = () => {
    localStorage.clear();                                            // here it is used to clear the local storage
    navigate('/signup');                                  // here it is used to navigate to the signup page
  }
  return (
    // className='NAV'
    <div > 
      <img className='logo' alt='logo' src='https://e7.pngegg.com/pngimages/560/954/png-clipart-online-shopping-boutique-retail-ecommerce-food-retail-thumbnail.png' /> 
      
      {auth ? <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add product</Link></li>
        <li><Link to="/update">update product</Link></li>
         <li><Link onClick={logout} to="/signup">logout </Link></li>
      </ul>
        :
        <ul className="nav-ul nav-right"> 
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

      }
    </div>
  );
}

export default Nav;
