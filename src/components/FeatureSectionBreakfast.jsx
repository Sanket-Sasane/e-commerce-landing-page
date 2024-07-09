import React from 'react'
import { dairyData } from '../data'
import ProductCard from './ProductCard'

const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl"> breakfast & dairy </h3>
          <p className="text-gray-600 mt-2">
            buy best quality breakfasat online from big-basket stop near you.
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature-button">Eggs & dairy</button>
          <button className="text-gray-600 hover:text-accent">pizza</button>
          <button className="text-gray-600 hover:text-accent">
            snack
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div className="">
          <img
            className="w-full h-full object-cover"
            src="/feature__2.webp"
            alt="banner"
          />
        </div>
        {dairyData.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default FeatureSectionBreakfast