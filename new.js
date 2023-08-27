function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments') 
    .then(pro =>pro.json()) 
    .then(accept => displayComments(accept))
}
function displayComments(items){
   const comments = document.getElementById('comment-container') ;
    for(const item of items){
        console.log(item)
        const dropDiv = document.createElement("div") 
        dropDiv.classList.add('div')
        dropDiv.innerHTML = `
        <div>
        <div style ="width:70px; height:70px; border:2px solid blue; border-radius:35px"></div>
        <h2 style="color:black; font-weight:800">Name: ${item.name}</h2>
        <h3>email: ${item.email}</h3> 
        <strong>Comment: <span style="font-weight:500">${item.body}</span></strong>
        <div style ="display:flex;align-item:center;justify-content:center; margin-top:20px">
            <button style ="padding:8px 16px; border:none">Read More</button>
        </div>
        </div>
        `;
        comments.appendChild(dropDiv)
        
    }
  

}


