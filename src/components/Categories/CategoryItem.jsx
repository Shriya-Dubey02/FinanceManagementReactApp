import React from 'react'

function CategoryItem({CategoryName}) {
  return (
    <div>
  
    <div class="card">
      <div class="card-body">
      
        <h5 class="card-title ">{CategoryName}</h5>
        
        
        {/* Update Button */}
        <button className='btn btn-success' id="categoryButton">Update</button>

        {/* Delete Button */}
        <button className='btn btn-danger' id="categoryButton">Delete</button>
      </div>
   
    </div>
    </div>
  )
}

export default CategoryItem
