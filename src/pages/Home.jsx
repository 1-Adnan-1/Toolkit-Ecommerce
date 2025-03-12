import React, { useState } from "react";
import SliderCom from "../components/home/SliderCom";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import Footer from "../components/Footer";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderCom />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
