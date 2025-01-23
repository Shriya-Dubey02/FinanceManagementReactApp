import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import CategoryForm from './CategoryForm'
import { getCategories } from './Categoryservice'

function Category() {
    let[category,setCategory]=useState([])
    let[showForm,setShowForm]=useState(false);


    useEffect(()=>{
        getCategories().then(data=>{
            setCategory(data);
        })
    },[showForm])

    const handleClick=()=>{

        setShowForm((prev)=>!prev)
    }


  return (
    
    <div>
 {/* Show From button start  */}
  
{/* Show From button end */}


   <div className="container">


<button className='btn btn-primary' onClick={handleClick}>Show Form</button>
{showForm?<CategoryForm/>:<></>}

    {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
    
        {/* <CategoryForm/> */}
    {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
    <div className="row">
        <div className="col">

           {/* Displaying Categories */}
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {category.map((s)=>{
                    return(
                        <CategoryItem
                        CategoryName={s.subCategoryName}
                        
                        />
                    )

                })}
            </div>

             {/* Displaying Categories: END */}
        </div>

    </div>
   </div>
   
    </div>
  )
}

export default Category
