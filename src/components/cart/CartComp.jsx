import React from "react";
import { removeFromCart, decreaseQuantity } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  const totalPrice = (cart?.price * cart?.quantity).toFixed(2);

  return (
    <div className="my-10 p-5 flex items-center justify-between bg-white shadow-lg rounded-xl border border-gray-200">
      <img
        className="h-[150px] w-[150px] object-contain rounded-lg"
        src={cart?.image}
        alt={cart?.title}
      />
      <div className="w-[500px] px-5">
        <div className="text-2xl font-bold text-gray-800">{cart?.title}</div>
        <div className="text-gray-600 text-sm mt-2">{cart?.description}</div>
      </div>
      <div className="text-xl font-semibold text-gray-700">
        {totalPrice}₺{" "}
        <span className="text-gray-500 text-lg">({cart?.quantity})</span>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => dispatch(decreaseQuantity(cart?.id))}
          disabled={cart?.quantity === 1}
          className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-md  transition ${
            cart?.quantity === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 cursor-pointer text-gray-800"
          }`}
        >
          -
        </button>

        <button
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="bg-red-500 hover:bg-red-600 transition text-white w-[150px] text-xl h-12 flex items-center justify-center p-3 rounded-lg shadow-md cursor-pointer"
        >
          Ürünü Sil
        </button>
      </div>
    </div>
  );
};

export default CartComp;
