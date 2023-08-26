function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(pro => pro.json()) 
    .then(data => displayUsers2(data))
}

function displayUsers2(oke){
    const ul = document.getElementById('users-list')
    for(const item of oke){
        const li = document.createElement('li') 
        li.innerText = item.name;
        ul.appendChild(li)
    }
}