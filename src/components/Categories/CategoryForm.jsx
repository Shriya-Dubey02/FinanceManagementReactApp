import React, { useEffect, useState } from 'react'
import { addBudget, addCategory, updateCategory } from './Categoryservice'

function CategoryForm({onAddCategory,selectedCategory,setSelectedCategory}) {

  let[category,setCategory]=useState({id:'',subCategoryName:''})

  // To add categories
  const submitHandler=(e)=>{
    e.preventDefault();

    console.log("Submit handler ")
    addCategory({
      id: e.target.id.value,
      subCategoryName: e.target.subCategoryName.value
    }).then(data=>data)

    onAddCategory();
  
  }

 




  // ================================
  useEffect(()=>{
    if(selectedCategory)
    {
      setCategory(selectedCategory);
      console.log("Clicked",selectedCategory)
    }
      
    
  },[selectedCategory])
  // // ================================
  // // To update categories
  const updateHandler=(e)=>{
    e.preventDefault();
    console.log("update handler");
    updateCategory(selectedCategory._links.self.href,{
      id:e.target.id.value,
      subCategoryName: e.target.subCategoryName.value
    }).then(data=>{
      onAddCategory();
      setCategory({categoryId:'',categoryName:''})
      setSelectedCategory(null);
    })

  }

  // to control change in input box

const handleChange=(e)=>{

  // console.log(e.target)
   let{name,value}=e.target;
   // console.log(name+" "+value);
   setCategory((prevProduct)=>{
     console.log(prevProduct); //to get the last product
     return{...prevProduct,[name]:value};
 
   })
 }


  



  // =================================


  
  return (
    <div>
      <div class="maincategory">
<form id='myForm' onSubmit={selectedCategory?updateHandler:submitHandler}>
  <h1 class="categoryHead">Category Form</h1>

  {selectedCategory?<></>:<><label for="Id">
        Enter Category Id:
  </label>
  <input type="text" 
         id="CategoryId" 
         name="id" 
         placeholder="Enter Id"
         value={category.id} required
         onChange={handleChange}/></>}

       

  <label for="name">
        Enter Category Name:
  </label>
  <input type="text"
         id="CategoryName" 
         name="subCategoryName"
         placeholder="Enter Name"  value={category.subCategoryName}
         onChange={handleChange} required/> 

  <div class="wrap">
  {
   selectedCategory?<button type="submit" className="btn btn-primary">Update</button>:<button type="submit" className="btn btn-primary">Submit</button>
}
  </div>
</form>
</div>


    </div>
  )
}

export default CategoryForm
