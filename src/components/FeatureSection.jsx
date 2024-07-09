import React from 'react'
import FeatureCard from './FeatureCard';
import {LiaShippingFastSolid, LiaMoneyBillWaveSolid, LiaGiftSolid} from 'react-icons/lia'
import {FiPhoneCall} from 'react-icons/fi'

const featureData=[
    {
        title:"free shipping",
        icon: <LiaShippingFastSolid />,
    },
    {
        title:"best price guarantee",
        icon: <LiaMoneyBillWaveSolid />,
    },
    {
        title:"free curbside pickup",
        icon: <LiaGiftSolid />,
    },
    {
        title:"support 24/7",
        icon: <FiPhoneCall />,
    },
];

const FeatureSection = () => {
  return (
    <div className='container pt-16 mb-12'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {
                featureData.map((feature)=>(
                    <FeatureCard key={feature.title} feature={feature} />
                ))
            }
        </div>
    </div>
  )
}

export default FeatureSection