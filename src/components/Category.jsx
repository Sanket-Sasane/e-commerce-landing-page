import React from 'react'
import CategoryCard from '../components/CategoryCard'
import {data} from '../data' 

const Category = () => {
  return (
    <div className='container pt-16 '>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                data.map((data)=>(
                    <CategoryCard key={data.id} data={data} />
                ))
            }
        </div>
    </div>
  )
}

export default Category