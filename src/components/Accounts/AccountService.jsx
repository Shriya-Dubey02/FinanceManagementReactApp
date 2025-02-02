const API_LINK="http://localhost:8080/accounts"

export const getAccounts=()=>{
    return fetch(API_LINK).then(data=>data.json())
    .then(data=>data["_embedded"]["accounts"])
}

export const getIncomes=()=>{
    return fetch("http://localhost:8080/incomes")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["incomes"])
}

export const setAccountsForIncome=(account_link,income_link)=>{
    return fetch(income_link,
        {method:"PUT",headers:{
            "Content-Type":"text/uri-list"
        },body:account_link}
    )

}

