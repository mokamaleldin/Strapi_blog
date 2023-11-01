// this is the category button
"use client"
import React from 'react'

const Category = ({cat}:any) => {
  return (
    <div onClick={() => {}} 
      className=" bg-[#af8333] p-4 mx-3 rounded-lg shadow-md  cursor-pointer">
        {cat.attributes.Title }
    </div>
  )
}

export default Category;
