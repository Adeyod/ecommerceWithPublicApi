import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="fixed top-0 right-0 left-0 flex justify-between p-5 text-xl bg-slate-600 text-white h-[75px]">
      <div>
        <Link to="/">ShopHere</Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">
          <p>{cartItems && cartItems.length > 0 ? cartItems.length : ''}</p>
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
