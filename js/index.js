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

function deletePosts() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
  }
  
  function patchAPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "foo",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  
  function createAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  