import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { callProductListApi } from '../features/productSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.productLists.find((p) => p.id === parseInt(id))
  );
  // localStorage.setItem('product', JSON.stringify(product));

  // const productInfo = localStorage.getItem('product')
  //   ? JSON.parse(localStorage.getItem('product'))
  //   : product;
  useEffect(() => {
    dispatch(callProductListApi());
  }, []);

  return (
    <div className="m-10 gap-x-8">
      <p>ProductDetails</p>
      <div className="lg:flex items-center justify-between">
        <div className="lg:mr-[80px] ">
          <img
            className="m-auto"
            src={product?.thumbnail}
            alt={product?.title}
          />
        </div>
        <div className="mt-5 lg:mx-[26px] lg:w-[50%] text-2xl">
          <p className="mb-12">{product?.description}</p>
          <p>Name: {product?.title}</p>
          <p>Price: ${product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
