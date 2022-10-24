import React from "react";
import { Slider } from "../components";
import SmallSlider from "../components/SmallSlider";
import { bigSlider } from "../data/dummy";
import { sliderProducts } from "../data/dummy";

const Dashboard = () => {
  return (
    <div>
      <Slider />
      <p className="flex justify-center text-2xl font-bold py-3">NEW ARRIVAL</p>
      <SmallSlider data={sliderProducts} />
    </div>
  );
};

export default Dashboard;
