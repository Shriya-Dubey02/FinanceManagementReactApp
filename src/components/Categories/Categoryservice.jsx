const API_LINK="http://localhost:8080/subcategories"
export const getCategories=()=>{
    return fetch(API_LINK).then(data=>data.json())
    .then(data=>data["_embedded"]["subcategories"])
}

export const deleteCategory=(category_id_link)=>{
    console.log(category_id_link)
    return fetch(category_id_link,{method:"DELETE"})
    .then(data=>data.json())
    .then(data=>data)
}

export const addCategory=(category)=>{
    console.log("Add category called",category)
    return fetch(API_LINK,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(category)
    }).then(data=>data.json())
    .then(data=>{
        console.log("data recieved",data)
    })
}

export const updateCategory=(category_id_link,category)=>{
   return fetch(category_id_link,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(category)
   }).then(data=>data.json())
   .then(data=>data)
}

export const getCategoryById=(id_link)=>{
    return fetch(id_link)
    .then(data=>data.json())
    .then(data=>data)
}

export const addBudget=(budget)=>{
    return fetch("http://localhost:8080/budgets",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },body:JSON.stringify(budget)}).then(data=>data.json()).then(data=>data)

}

export const setCategoryForBudget=(budget_id_link,category_id_link)=>{
   return fetch(budget_id_link,
    {method:"PUT", headers:{
        "Content-Type":"text/uri-list"
    },body:category_id_link}
   )


}