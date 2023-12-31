import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callProductListApi } from '../features/productSlice';
import { addToCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const { productLists } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);

  const keys = ['title', 'brand', 'category'];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(callProductListApi());
  }, []);

  return (
    <div className="">
      <p className="text-3xl mb-4 underline italic text-green-500">PRODUCTS</p>
      <input
        type="text"
        className="border-2 outline-none mb-3 w-full rounded-lg pl-2 h-12 lg:w-[30vw]"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {productLists && productLists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4">
          {productLists
            .filter((item) =>
              keys.some((key) => item[key].toLowerCase().includes(query))
            )
            .map((item) => (
              <div key={item.id} className=" aspect-w-16 aspect-h-2">
                <div class=" inset-0 w-full h-[50%] overflow-hidden object-cover">
                  <Link to={`/product-details/${item.id}`}>
                    <img src={item.thumbnail} alt={item.title} loading="lazy" />
                  </Link>
                </div>
                <div className="text-pink-600 font-bold">
                  <p className="mb-2 ">{item.title}</p>

                  <p>Price: $ {item.price}</p>
                  <p className="mb-4">{item.brand}</p>

                  {/* <p className="mb-2 whitespace-wrap">{item.category}</p> */}
                  {/* <p>{item.description}</p> */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="uppercase bg-slate-600 p-2 rounded font-bold text-white mb-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default Products;
