const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response =>{
            
            apiResult.textContent= JSON.stringify(response.data)
        
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url,newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
        .then(response => {
            userID.textContent= `ID : `+ response.data.id
            userName.textContent= `Name : `+response.data.name
            userCity.textContent = `City : `+response.data.city
            userAvatar.src = response.data.avatar
            
        })
        .catch(error => console.error(error))
}

function updateUser(id,userUpdated){
    axios.put(`${url}/${id}`,userUpdated)
     .then(response => {
            console.log(response)
     })
     .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
     .then(response=> console.log(response))
     .catch(error=> console.error(error))
}

const newUser= {
    name:"George Felipe",
    avatar:"https://picsum.photos/200/300", //ALEATORY IMAGE
    city:"Fortaleza"
}
const userUpdated={
    name:"Marcs Felipe",
    avatar:"https://picsum.photos/200/300",
    city:"Caponga"
}

//updateUser(4,userUpdated)
getUsers()
getUser(5)
//addNewUser(newUser)
deleteUser(5)