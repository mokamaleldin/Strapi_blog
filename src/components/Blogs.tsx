"use client"
// this is the container for all the blog cards
import React from 'react'
import BlogCard from './BlogCard'

const  Blogs = ({blogs}:any) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {blogs?.data?.map((blog:any) =>(
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
        
    </div>
  )
}

export default  Blogs