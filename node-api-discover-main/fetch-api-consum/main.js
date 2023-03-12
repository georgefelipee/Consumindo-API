const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(){
    fetch(`${url}/2 `)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name 
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        }
        )
        .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.JSON())
        .then( data => alert.textContent= data )
        .catch(error => console.error(error))
}

function UpdateUser(updateUser,id){
    fetch(`${url}/${id}`,{
        method:"PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8" 
        }
    })
        .then(response => response.json())
        .then(data=> alert.textContent= data)
        .catch(error => console.error(error))
}

function deleteUser(id){
    fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{"Content-type": "application/json; charset= UTF-8"}

    })
        .then(response => response.json() )
        .then(data => alert.textContent = data)
        .catch(error => console.error(error))
}

const newUser = {
    name:"George Felipe",
    avatar:"https://picsum.photos/200/300",
    city:"Horizonte"

} 

const updateUser = {
    name:"Marcelo clovis",
    avatar:"https://picsum.photos/200/300",
    city:"Recife"
}

//UpdateUser(updateUser,6)
getUsers()
getUser()
deleteUser(6)
//addUser(newUser)