import { data } from "react-router-dom"

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
export const updateSpentAmount=(budget_id_link,budget)=>{
    return fetch(budget_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(budget)
    }).then(data=>data.json())
    .then(data=>data)
}
export const getBudgetsById=(id_link)=>{
    return fetch(id_link)
    .then(data=>data.json())
    .then(data=>data)

}