import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cardSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="p-6 mt-60 max-w-screen-xl mx-auto">
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl mt-4">
            Toplam:
            <span className="font-bold text-3xl ml-2">
              {totalAmount.toFixed(2)}$
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-600">Sepetiniz Boş!</h2>
          <p className="text-lg text-gray-500 mt-4">
            Henüz sepetinize ürün eklemediniz. Hadi alışverişe başlayın!
          </p>
          <button
            onClick={goToHomePage}
            className="mt-6 px-6 py-2 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Alışverişe Başla
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
