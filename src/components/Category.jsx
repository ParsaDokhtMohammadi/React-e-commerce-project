import React from 'react'
import { useParams } from 'react-router'

const Category = () => {
    const category = useParams()
  return (
    <div>Category
        {category.id}
    </div>
    
  )
}

export default Category