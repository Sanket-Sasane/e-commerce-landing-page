import React from "react";
import ProductCard from "./ProductCard";
import { fruitData } from "../data";

const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl"> Fruits and Vegetables </h3>
          <p className="text-gray-600 mt-2">
            buy farm's fresh fruits and vegetables online at best price
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature-button">Fruits</button>
          <button className="text-gray-600 hover:text-accent">Fruits</button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div className="">
          <img
            className="w-full h-full object-cover"
            src="/feature__1.webp"
            alt="banner"
          />
        </div>
        {fruitData.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionFruits;
