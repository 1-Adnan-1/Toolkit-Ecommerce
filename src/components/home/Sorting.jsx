import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex justify-end items-center ">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-200 hover:bg-blue-600 hover:text-white transition rounded-xl py-2 px-5"
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
