import React from 'react'
import { blogData } from '../data'
import BlogCard from './BlogCard'

const BlogSection = () => {
  return (
    <div className='container pt-16'>
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className='text-gray-400'>
            Present post in a best way to highlight interesting moments of our blog.
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
            {
                blogData.map((blog)=>(
                    <BlogCard key={blog.title} blog={blog} />
                ))
            }
        </div>
    </div>
  )
}

export default BlogSection