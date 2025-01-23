const API_LINK="http://localhost:8080/subcategories"
export const getCategories=()=>{
    return fetch(API_LINK).then(data=>data.json())
    .then(data=>data["_embedded"]["subcategories"])
}