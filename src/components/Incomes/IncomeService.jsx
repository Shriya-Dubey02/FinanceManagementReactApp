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

export const getIncome=()=>{
    return fetch("http://localhost:8080/incomes")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["incomes"])
}

export const getCashIncome=()=>{
    return fetch("http://localhost:8080/accounts/A102/incomes")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["incomes"])
}

export const getSavingsIncome=()=>{
    return fetch("http://localhost:8080/accounts/A103/incomes")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["incomes"])
}

export const getCardIncome=()=>{
    return fetch("http://localhost:8080/accounts/A101/incomes")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["incomes"])
}


export const deleteAccounts=(accountLink)=>{
    return fetch(accountLink,{method:"DELETE"})
    .then(data=>data.json())
    .then(data=>data)
}