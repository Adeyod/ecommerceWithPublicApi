import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../countryData';
import {
  addToCart,
  getTotal,
  removeFromCart,
  deleteFromCart,
} from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDeleteFromCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cartItems]);
  return (
    <div>
      <p className="uppercase font-bold border-2 md:w-[50%] mb-4 mx-auto bg-green-500 p-2 rounded text-white">
        CheckOut
      </p>
      <div>
        {cartItems && cartItems.length > 0 ? (
          <div className="md:grid grid-cols-2 justify-between">
            <div className="grid-cols-2">
              <div className=" ">
                <div className="grid grid-flow-col font-bold">
                  <p className="mr-20">Image</p>
                  <p className="mr-25">Price</p>
                  <p className="ml-10">Quantity</p>
                  <p className="text-end">Remove</p>
                </div>
                {cartItems.map((item) => (
                  <div>
                    <div>
                      <div className="py-2 border-b-2 border-b-green-200 flex items-center justify-between ">
                        <img
                          className="w-[100px]"
                          src={item.thumbnail}
                          alt={item.title}
                          loading="lazy"
                        />
                        <p>
                          {item.price -
                            (item.price * item.discountPercentage) / 100}
                        </p>
                        <div className="flex items-center mr-6 gap-x-2">
                          <button onClick={() => handleAddToCart(item)}>
                            +
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => handleRemoveFromCart(item)}>
                            -
                          </button>
                        </div>
                        <button
                          className="mr-5"
                          onClick={() => handleDeleteFromCart(item)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="pt-4 text-2xl">
                  <span className="font-bold uppercase">SubTotal:</span> $
                  {cartTotalAmount}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end text-center ml-2 mt-5">
              <p className="md:mr-[20%] lg:mr-[40%] font-bold border-2 p-2 rounded text-white bg-green-500">
                MAKE PAYMENT
              </p>
              <form className="mx-auto">
                <div className="">
                  <p className="text-justify">Email</p>
                  <input
                    className="border-2 rounded pl-3 outline-none h-[40px] w-[410px] items-center"
                    type="email"
                    placeholder="Enter Email..."
                  />
                </div>

                <div className="">
                  <p className="text-justify">Card Information</p>
                  <div className="flex justify-center">
                    <input
                      className="border-2 rounded pl-3 h-[40px] outline-none w-[300px]"
                      type="number"
                      placeholder="1234 1234 1234 1234"
                      maxLength={19}
                    />
                    <img
                      className="h-[40px]"
                      src="/images/visaRemoveBg.png"
                      alt="cardImage"
                    />
                  </div>
                  <div className="h-[40px] my-2">
                    <input
                      className="outline-none rounded pl-3 border-2 h-[40px] w-[205px] items-center"
                      type="date"
                      value="MM/YY"
                    />
                    <input
                      className="border-2 rounded pl-3 h-[40px] outline-none w-[205px] items-center"
                      type="number"
                      placeholder="CVC"
                      maxLength={3}
                    />
                  </div>
                </div>

                <div className="">
                  <p className=" text-justify">Name on card</p>
                  <input
                    type="text"
                    className="border-2 rounded pl-3 h-[40px] outline-none w-[410px] items-center"
                  />
                </div>
                <div className="">
                  <p className=" text-justify">Country or region</p>

                  <div className="flex flex-col">
                    <select className="border-2 rounded pl-3 h-[40px] outline-none w-[410px] items-center">
                      {data.map((info) => (
                        <option value={info.name}>{info.name}</option>
                      ))}
                    </select>
                    <input
                      className="border-2 rounded pl-3 h-[40px] outline-none w-[410px] items-center"
                      type="number"
                      placeholder="ZIP"
                    />
                  </div>
                </div>
                <div className="mt-6 border-2 rounded pl-3 h-[40px] outline-none w-[410px] items-center flex">
                  <input type="radio" />
                  <div className="">
                    <p>Save my info for secure 1-click checkout</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div>{navigate('/')}</div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
