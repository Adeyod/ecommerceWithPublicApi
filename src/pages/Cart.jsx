import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';

import {
  addToCart,
  emptyCart,
  getTotal,
  removeFromCart,
} from '../features/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  // const handleSumTotal = cartItems
  //   .map((everyItem) => {
  //     const discountedPercentage = everyItem.discountPercentage * 0.01;
  //     const finalPrice =
  //       everyItem.price - everyItem.price * discountedPercentage;
  //     return everyItem.quantity * finalPrice;
  //   })
  //   .reduce(
  //     (handleSumTotal, singleItemPrice) => handleSumTotal + singleItemPrice,
  //     0
  //   )
  //   .toFixed(2);

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);
  return (
    <div className="mt-[30px]">
      <p className="text-3xl mb-4 underline italic text-green-500">
        SHOPPING CART
      </p>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-2 p-3 rounded-lg border-slate-600 md:flex mx-4 md:mx-32 lg:mx-52 mb-4 md:justify-around items-center text-xl"
            >
              <div className="md:w-1/3">
                <div className="flex justify-center">
                  <Link to={`/product-details/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      className="items-center text-center"
                    />
                  </Link>
                </div>
                <p>
                  <span className="uppercase font-bold">Name: </span>
                  {item.title}
                </p>
              </div>
              <div className="flex flex-col gap-y-6 mt-5 md:w-1/3">
                <p>
                  <span className="uppercase font-bold">category:</span>{' '}
                  {item.category}
                </p>
                <p>
                  <span className="uppercase font-bold">Price:</span> $
                  {item.price}
                </p>
                <div>
                  <p className="uppercase font-bold">Quantity:</p>
                  <div className="flex justify-center gap-x-3 text-2xl">
                    <button onClick={() => dispatch(addToCart(item))}>
                      <GrAdd />
                    </button>

                    <p>{item.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(item))}>
                      <AiOutlineMinus />
                    </button>
                  </div>
                </div>

                <p>
                  <span className="uppercase font-bold">
                    Total:{' '}
                    {(
                      item.quantity *
                      (item.price -
                        (item.price * item.discountPercentage) / 100)
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}

          <div className="mb-10">
            <p className="text-2xl">
              <span className="uppercase font-bold">Sum Total:</span>{' '}
              {/* {handleSumTotal} */}
            </p>

            <p>
              <span className="uppercase font-bold">
                Total: {cartTotalAmount}
              </span>
            </p>
            <button
              onClick={() => dispatch(emptyCart())}
              className="uppercase font-bold border-2 bg-red-500 p-2 rounded text-white"
            >
              empty cart
            </button>
            <button
              onClick={() => navigate('/check-out')}
              className="uppercase font-bold border-2 bg-green-500 p-2 rounded text-white"
            >
              checkout
            </button>
          </div>
        </div>
      ) : (
        <p>
          Cart is empty !{' '}
          <button
            className="italic text-blue-700 font-bold hover:underline text-2xl"
            onClick={() => navigate('/')}
          >
            CLICK ME
          </button>{' '}
          to add products
        </p>
      )}
    </div>
  );
};

export default Cart;
