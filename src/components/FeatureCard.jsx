import React from 'react'

const FeatureCard = ({feature}) => {
    const {title,icon}=feature;
  return (
    <div className='flex items-center gap-4'>
        <div className='w-10 h-10  md:w-[100px] md:h-[56px] bg-gray-300 text-accentDark text-[24px] grid place-items-center rounded-full'>
            {icon}
        </div>
        <div>
            <h3 className='text-accent font-medium text-xl'>{title}</h3>
            <p className='text-gray-400 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat officia sapiente!</p>
        </div>
    </div>
  )
}

export default FeatureCard