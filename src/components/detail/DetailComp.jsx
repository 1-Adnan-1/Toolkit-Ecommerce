import React from "react";
import { useDispatch } from "react-redux";
import { addToCard, increaseQuantity } from "../../redux/cardSlice";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  // Sepete ürün ekleme fonksiyonu
  const addBasket = () => {
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

  // Miktarı arttırma fonksiyonu
  const increaseQuantityInCart = () => {
    dispatch(increaseQuantity(productDetail?.id));

    toast.info("Ürün Miktarı Arttırıldı!", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 my-16 px-6 md:px-12 max-w-screen-xl mx-auto">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-[400px] h-[330px] object-contain rounded-lg shadow-lg border-2 border-gray-200"
          src={productDetail?.image}
          alt={productDetail?.title}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <div className="text-3xl font-semibold text-gray-900 leading-tight mb-6">
          {productDetail?.title}
        </div>

        <div className="text-lg text-gray-600 mb-6">
          {productDetail?.description}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="text-lg text-yellow-500">
            {"★".repeat(Math.floor(productDetail?.rating?.rate))}
            {"☆".repeat(5 - Math.floor(productDetail?.rating?.rate))}
          </div>
          <div className="text-sm text-gray-500">
            ({productDetail?.rating?.count} reviews)
          </div>
        </div>

        {/* Price */}
        <div className="text-3xl font-semibold text-gray-900 mb-8">
          <span className="text-2xl text-gray-600">₺</span>
          {productDetail?.price}
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-between gap-4">
          <button
            onClick={addBasket}
            className="w-full py-3 text-xl text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300 focus:outline-none shadow-md"
          >
            Sepete Ekle
          </button>

          {/* Miktarı Arttır Button */}
          <button
            onClick={increaseQuantityInCart}
            className="w-20 py-3 text-3xl  bg-gray-200 rounded-md text-black hover:bg-gray-400 transition-all duration-300 focus:outline-none shadow-md flex justify-center"
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
