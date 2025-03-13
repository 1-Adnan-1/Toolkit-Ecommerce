import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { Link } from "react-router-dom";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6 bg-gray-100 p-6 max-h-screen overflow-y-auto shadow-md rounded-lg">
      <div className="border-b pb-2 text-xl font-semibold text-gray-800 mb-2">
        <Link to={"/"}>KATEGORİ</Link>
      </div>
      <div>
        {categories?.map((category, i) => (
          <div
            key={i}
            onClick={() => setCategory(category)}
            className="text-lg -ml-[13px] w-full cursor-pointer p-3 rounded-md hover:bg-blue-600 hover:text-white mb-2 transition duration-200 ease-in-out transform hover:scale-105 "
          >
            <span className="truncate" title={category}>
              {category.length > 10 ? `${category.slice(0, 11)}...` : category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
