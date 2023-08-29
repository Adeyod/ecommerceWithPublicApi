import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callProductListApi } from '../features/productSlice';
import { addToCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const { productLists } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(callProductListApi());
  }, []);

  return (
    <div className="mt-[40px]">
      <p>PRODUCTS</p>

      {productLists && productLists.length > 0 ? (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-4">
          {productLists.map((item) => (
            <div key={item.id} className=" aspect-w-16 aspect-h-2">
              <div class=" inset-0 w-full h-[50%] overflow-hidden object-cover">
                <Link to={`/product-details/${item.id}`}>
                  <img src={item.thumbnail} alt={item.title} />
                </Link>
              </div>
              <div className="text-pink-600 font-bold">
                <p className="mb-2 ">{item.title}</p>

                <p>Price: $ {item.price}</p>
                <p className="mb-4">{item.brand}</p>

                {/* <p className="mb-2 whitespace-wrap">{item.category}</p> */}
                {/* <p>{item.description}</p> */}
                <button
                  onClick={() => dispatch(addToCart(item))}
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
