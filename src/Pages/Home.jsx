import React from "react";
import Adds from "../Components/Adds";
import CheckoutBlog from "../Components/CheckoutBlog";
import NewsSlider from "../Components/NewsSlider";
import ShopByCate from "../Components/ShopByCate";
import Slider1G from "../Components/Slider1G";

const Home = () => {
  return (
    <div>
      <Slider1G />
      <ShopByCate h2tag={"Shop by categories"} />
      <Adds />
      <ShopByCate h2tag={"Explore by categories"} />
      <CheckoutBlog />
      <NewsSlider />
    </div>
  );
};

export default Home;
