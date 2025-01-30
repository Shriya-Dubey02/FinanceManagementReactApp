const API_LINK="http://localhost:8080/budgets"

export const getBudget=()=>{
    return fetch(API_LINK).then(data=>data.json())
    .then(data=>data["_embedded"]["budgets"])
}
