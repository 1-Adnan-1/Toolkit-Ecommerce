import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[380px] p-4 mb-5 mx-auto border border-gray-300 rounded-xl shadow-lg bg-white hover:scale-105 transition-transform cursor-pointer relative"
    >
      <div className="text-xl font-bold absolute rounded-md top-2 right-2  text-black px-1 py-1 hover:opacity-100 opacity-100 transition-opacity">
        {product?.price} <span className="text-sm">$</span>
      </div>
      <img
        className="w-[220px] h-[220px] object-contain m-auto rounded-lg"
        src={product?.image}
        alt={product?.title}
      />
      <div
        className="text-center px-3 mt-3 text-xl font-bold text-gray-800 truncate w-[70%] mx-auto"
        title={product?.title}
      >
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
