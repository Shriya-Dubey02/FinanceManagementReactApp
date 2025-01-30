const budget_API_link="http://localhost:8080/budgets"

export const getBudgets=()=>{
    return fetch(budget_API_link).then(data=>data.json())
    .then(data=>data["_embedded"]["budgets"])
}

export const deleteBudgets=(budget_id_link)=>{
    console.log(budget_id_link)
    return fetch(budget_id_link,{method:"DELETE"})
    .then(data=>data.json())
    .then(data=>data)
}