
const API_LINK="http://localhost:8080/users"
export const getUsers=()=>{
    return fetch(API_LINK).then(data=>data.json())
    .then(data=>data["_embedded"]["users"])
}



export const addUsers=(users)=>{
   console.log("users"+users);
    return fetch(API_LINK,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(users)
    }).then(data=>data.json())
    .then(data=>data)
    .catch(error=>error)
}
