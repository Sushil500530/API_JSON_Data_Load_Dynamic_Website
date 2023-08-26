
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users') 
        .then(res => res.json()) 
        .then(get => displayUsers(get))
}

// onno function eo pathai dite pari  
function displayUsers(data){
    console.log(data)
}