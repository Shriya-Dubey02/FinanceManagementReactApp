import React from 'react'

function CategoryForm() {
  return (
    <div>
      <div class="maincategory">
<form id='myForm'>
  <h1 class="categoryHead">Category Form</h1>

  <label for="Id">
        Enter Category Id:
  </label>
  <input type="number" 
         id="CategoryId" 
         name="CategortId" 
         placeholder="Enter Id"/>

       

  <label for="name">
        Enter Category Name:
  </label>
  <input type="text"
         id="CategoryName" 
         name="CategoryName"
         placeholder="Enter Name" />

  <div class="wrap">
       <button type="submit">
              Submit </button>
  </div>
</form>
</div>


    </div>
  )
}

export default CategoryForm
