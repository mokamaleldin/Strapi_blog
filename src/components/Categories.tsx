// this is the container for the category
"use client"
import React from 'react'
import Category from './Category'

const Categories = ({categories} :any) => {
  return (
    <div className="flex gap-6 mb-8">
    {categories?.data?.map((category: any) => (
      <div key={category.id}>
        <Category cat={category} />
      </div>
    ))}
  </div>
  )
}

export default Categories