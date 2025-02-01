export const getIncomes=()=>{
    return fetch("http://localhost:8080/incomes")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["incomes"])

}


//addIncome
export const addIncomes=(income)=>{
    return fetch("http://localhost:8080/incomes",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(income)
    }).then(data=>data.json())
    .then(data=>data)
}