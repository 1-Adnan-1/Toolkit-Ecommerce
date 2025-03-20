import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCard } from "../../redux/cardSlice";
import { toast } from "react-toastify";

const Product = ({ product, productDetail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Sepete ürün ekleme fonksiyonu
  const addBasket = (e) => {
    e.stopPropagation(); // Ürüne tıklamayı engelle

    dispatch(
      addToCard({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: 1,
      })
    );

    toast.success("Ürün Sepete Eklendi!", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[380px] p-4 mb-5 mx-auto border border-gray-300 rounded-xl shadow-lg bg-white hover:scale-105 transition-transform cursor-pointer relative group"
    >
      {/* Ürün resmi */}
      <img
        className="w-[220px] h-[220px] object-contain m-auto rounded-lg"
        src={product?.image}
        alt={product?.title}
      />

      {/* Ürün başlığı */}
      <div
        className="text-center px-3 mt-3 text-xl font-bold text-gray-800 truncate w-[70%] mx-auto"
        title={product?.title}
      >
        {product?.title}
      </div>

      {/* Fiyat etiketi */}
      <div className="text-xl font-bold absolute rounded-md top-2 right-2 text-black px-1 py-1 bg-white shadow-md">
        {product?.price} <span className="text-sm">$</span>
      </div>

      {/* Sepete ekle butonu (hover olunca görünür) */}
      <button
        onClick={addBasket}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 py-2 text-white bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700"
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default Product;
