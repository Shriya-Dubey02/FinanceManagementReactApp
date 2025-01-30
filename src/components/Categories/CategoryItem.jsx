import React, { useState } from "react";
import Category from "./Category";
import { addBudget, deleteCategory, getCategoryById, setCategoryForBudget } from "./Categoryservice";

function CategoryItem({ CategoryName, categoryLink,onDelete,onSelectCategory }) {
  let[budget,setBudget]=useState(0);

  // Budget Setting
  
//===========================================

//Function to Delete category

const onSelectDelete=async (category_id_link)=>{
  console.log(category_id_link)
  await deleteCategory(category_id_link)
  onDelete();
}
// ================================================

// Function to update categories
const onSelectUpdate=async (link)=>{
  let category=await getCategoryById(link);
  onSelectCategory(category);

  
}



// ====================================================

const onSelectBudget=(e)=>{
  e.preventDefault();
  console.log("Budget function working");
  const budgets={"limitAmount":e.target.limitAmount.value}
  addBudget(budgets).then(data=>{
    
    setCategoryForBudget(data._links.subcategory.href,categoryLink);
    
  })
  
}



// =================================================
// const onSelectDelete=async (category_id_link)=>{
//   console.log("Hello"+category_id_link);
//    const deleteCat=await deleteCategory(category_id_link)
// }

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title ">{CategoryName}</h5>
             
            </div>
            <div class="col">
              <img
                src={categoryLink + "/image"}
                className="card-img-top"
                alt="..." id="categoryImage"
              />
            </div>
             {/* Update Button */}
             <button className="btn btn-success btn-sm" id="categoryButton" onClick={()=>{onSelectUpdate(categoryLink)}}>
                Update
              </button>

              {/* Delete Button */}

              <button className="btn btn-danger btn-sm" id="categoryButton" onClick={()=>{onSelectDelete(categoryLink)}}>Delete</button>
             
             {/* Set Budget Button*/}
             
              <>

              <form action="" onSubmit={onSelectBudget}>
              <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="number" class="form-control" name="limitAmount"  />
</div>
<button className="btn btn-warning btn-sm" id="categoryButton" >   Set Budget
              </button>
              </form>

</>
             
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
