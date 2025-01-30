import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import CategoryForm from './CategoryForm'
import { getCategories } from './Categoryservice'

function Category() {
    let[category,setCategory]=useState([])
    let[showForm,setShowForm]=useState(false);
    let[selectedCategory,setSelectedCategory]=useState(null);
    

    


    useEffect(()=>{
        getCategories().then(data=>{
            setCategory(data);
        })
    },[showForm])

    const handleClick=()=>{

        setShowForm((prev)=>!prev)
    }

   
    const refreshCategories=()=>{
        getCategories().then(data=>{
            setCategory(data);
        })

    }

    const handleSelectCategory=(selectedCategory)=>{
        setSelectedCategory(selectedCategory);
        if(selectedCategory){
            showForm=true;
        }
        console.log(selectedCategory);

    }
   

    

    




  return (
    
    <div>

        {/* Navbar Start*/}
        <nav class="navbarBackground">
    <div class="container-fluid">

      <ul>
        <li class="listyle">Expense so far <br/>₹ 2000</li>
        <li class="listyle">Income so far <br/>₹ 20000</li>
    
      </ul>
      
    </div>
    
  </nav>



        {/* Navbar end */}
 {/* Show From button start  */}
  
{/* Show From button end */}


   <div className="container">


<button className='btn btn-primary' onClick={handleClick}>Show Form</button>
{showForm?<CategoryForm onAddCategory={refreshCategories} selectedCategory={selectedCategory}
setSelectedCategory={setSelectedCategory}/>:<></>}


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
                        categoryLink={s._links.self.href}
                        onDelete={refreshCategories}
                        onSelectCategory={handleSelectCategory}
                        
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
