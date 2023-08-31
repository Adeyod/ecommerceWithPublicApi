import React, { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const { cartItems } = useSelector((state) => state.cart);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="fixed top-0 right-0 left-0 flex justify-between p-5 text-xl bg-slate-600 text-white h-[75px]">
      <div>
        <Link to="/">OnlineShoppers</Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className=" hidden md:flex gap-x-3">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="relative">
          <Link to="/cart">
            <AiOutlineShoppingCart />
            <p className="absolute top-[-17px] right-[1px] font-bold text-brightRed">
              {cartItems && cartItems.length > 0 ? cartItems.length : ''}
            </p>
          </Link>
        </div>
        <div className="">
          <div className="md:hidden flex">
            <button onClick={() => handleToggle()}>
              {toggle ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>
          </div>
          <div
            className={
              !toggle
                ? 'right-[0px] flex flex-col md:hidden absolute top-[70px] p-6 gap-y-2 bg-slate-600'
                : ' right-[-1000px] absolute'
            }
            onClick={() => handleToggle()}
          >
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
