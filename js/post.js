function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(res => res.json())
    .then(data =>displayPosts(data))
}
/*
step-
1.get the container element where you want to add the new elements 
2.create child element
3.set innerText or innerHTML 
4.set appendChild
*/
function displayPosts(posts){
    const postList = document.getElementById('post-container') ;
    for(const post of posts){
        console.log(post)
        const div = document.createElement('div') ;
        div.classList.add('post')
        div.innerHTML = `
        <h4>user-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>

        ` ;
        postList.appendChild(div)
    }
}
