import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callProductListApi } from '../features/productSlice';
import { addToCart } from '../features/cartSlice';

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.productLists.find((p) => p.id === parseInt(id))
  );
  // localStorage.setItem('product', JSON.stringify(product));

  // const productInfo = localStorage.getItem('product')
  //   ? JSON.parse(localStorage.getItem('product'))
  //   : product;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };
  useEffect(() => {
    dispatch(callProductListApi());
  }, []);

  return (
    <div className="m-10 gap-x-8">
      <p className="text-3xl mb-4 underline italic text-green-500">
        ProductDetails
      </p>
      <div className="lg:flex items-center justify-between">
        <div className="lg:mr-[80px] ">
          <img
            className="m-auto"
            src={product?.thumbnail}
            alt={product?.title}
            loading="lazy"
          />
        </div>
        <div className="mt-5 lg:mx-[26px] lg:w-[50%] text-2xl ">
          <p className="mb-12">
            <span className="uppercase font-bold italic underline">
              description:
            </span>{' '}
            {product?.description}
          </p>
          <p className="">
            <span className="uppercase font-bold italic underline">name:</span>{' '}
            {product?.title}
          </p>
          <p className="my-3">
            <span className="uppercase font-bold italic underline">price:</span>{' '}
            ${product?.price}
          </p>
          <button
            className="uppercase bg-slate-600 p-2 rounded font-bold text-white mb-[40px]"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
